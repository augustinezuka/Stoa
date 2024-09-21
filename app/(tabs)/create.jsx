import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Animated,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../../utils/supabase";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState([]); // Accepts multiple images/videos
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [buttonScale] = useState(new Animated.Value(1));

  const pickMedia = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission denied",
        "You need to enable camera roll access!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Allow images and videos
      allowsMultipleSelection: true, // Enable multi-select
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setMedia([...media, ...result.selected]); // Add selected media
    }
  };

  const uploadMedia = async () => {
    if (!title || !description || !media.length || !tags || !category) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    setIsUploading(true);

    try {
      for (const item of media) {
        const response = await fetch(item.uri);
        const blob = await response.blob();
        const fileName = `${Date.now()}-${title}-${item.type}.jpg`;

        const { data, error } = await supabase.storage
          .from("uploads")
          .upload(fileName, blob, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) throw new Error(error.message);
      }
      Alert.alert("Success", "Media uploaded successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4">
        <View className="my-8">
          <Text className="text-4xl font-psemibold text-secondary mb-4">
            Create Post <Ionicons name="create" size={30} color="#004c99" />
          </Text>
        </View>

        {/* Title Input with Icon */}
        <View className="mb-4">
          <View className="flex-row items-center bg-white p-4 rounded-lg shadow-sm">
            <FontAwesome name="pencil" size={20} color="gray" />
            <TextInput
              className="ml-3 flex-1 text-lg"
              placeholder="Enter Title"
              value={title}
              onChangeText={setTitle}
            />
          </View>
        </View>

        {/* Description Input with Icon */}
        <View className="mb-4">
          <View className="flex-row items-center bg-white p-4 rounded-lg shadow-sm">
            <MaterialIcons name="description" size={20} color="gray" />
            <TextInput
              className="ml-3 flex-1 text-lg"
              placeholder="Enter Description"
              value={description}
              onChangeText={setDescription}
              multiline
            />
          </View>
        </View>

        {/* Tags Input with Icon */}
        <View className="mb-4">
          <View className="flex-row items-center bg-white p-4 rounded-lg shadow-sm">
            <Ionicons name="pricetags-outline" size={20} color="gray" />
            <TextInput
              className="ml-3 flex-1 text-lg"
              placeholder="Tags (comma separated)"
              value={tags}
              onChangeText={setTags}
            />
          </View>
        </View>

        {/* Category Input with Icon */}
        <View className="mb-4">
          <View className="flex-row items-center bg-white p-4 rounded-lg shadow-sm">
            <MaterialIcons name="category" size={20} color="gray" />
            <TextInput
              className="ml-3 flex-1 text-lg"
              placeholder="Category"
              value={category}
              onChangeText={setCategory}
            />
          </View>
        </View>

        {/* Media Preview */}
        {media.length > 0 ? (
          <FlatList
            data={media}
            horizontal
            keyExtractor={(item) => item.uri}
            renderItem={({ item }) => (
              <View className="mr-4">
                <Image
                  source={{ uri: item.uri }}
                  className="w-32 h-32 rounded-lg shadow-md"
                  resizeMode="cover"
                />
              </View>
            )}
          />
        ) : (
          <View className="border-2 border-dashed border-blue-500 p-10 items-center rounded-lg mb-6">
            <Ionicons name="image-outline" size={50} color="blue" />
            <Text className="text-blue-400 mt-4">No Media Selected</Text>
          </View>
        )}

        {/* Media Picker with Icon */}
        <TouchableOpacity
          onPress={pickMedia}
          className="py-4 rounded-lg mb-6 bg-blue-600 flex-row justify-center items-center shadow-sm"
          activeOpacity={0.9}
        >
          <Ionicons name="image-outline" size={20} color="white" />
          <Text className="text-white text-lg ml-2">Choose files you wish to upload</Text>
        </TouchableOpacity>

        {/* Submit Button with Animation */}
        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <CustomButton
            title={isUploading ? "Uploading..." : "Submit & Publish"}
            handlePress={() => {
              animateButton();
              uploadMedia();
            }}
            containerStyles={`${
              isUploading ? "bg-gray-400" : "bg-green-600"
            } py-3 rounded-lg`}
            isLoading={isUploading}
          />
        </Animated.View>

        {/* Loading Spinner */}
        {isUploading && (
          <ActivityIndicator size="large" color="#00ff00" className="mt-4" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
