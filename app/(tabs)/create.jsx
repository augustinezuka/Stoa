import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../../utils/supabase"; // Adjust the path based on your file structure
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton"; // Adjust based on your file structure

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const pickImage = async () => {
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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    if (!title || !description || !image || !tags || !category) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    setIsUploading(true);

    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const fileName = `${Date.now()}-${title}.jpg`;

      const { data, error } = await supabase.storage
        .from("uploads")
        .upload(fileName, blob, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw new Error(error.message);

      Alert.alert("Success", "Image uploaded successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <ScrollView className="bg-white px-4 py-6">
      <Text className="text-2xl font-bold text-black mb-4">Create Post</Text>

      <TextInput
        className="border border-gray-300 rounded-md p-4 mb-4"
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        className="border border-gray-300 rounded-md p-4 mb-4 h-24"
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        className="border border-gray-300 rounded-md p-4 mb-4"
        placeholder="Tags (comma separated)"
        value={tags}
        onChangeText={setTags}
      />

      <TextInput
        className="border border-gray-300 rounded-md p-4 mb-4"
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity
        onPress={pickImage}
        className="bg-blue-600 py-3 rounded-md mb-6"
      >
        <Text className="text-white text-center text-lg">Pick an Image</Text>
      </TouchableOpacity>

      {image && (
        <View className="mb-6 items-center">
          <Image
            source={{ uri: image }}
            className="w-48 h-48 rounded-lg"
            resizeMode="cover"
          />
        </View>
      )}

      <CustomButton
        title="Submit & Publish"
        handlePress={uploadImage}
        containerStyles={`mt-7 ${isUploading ? "bg-gray-400" : "bg-green-600"}`}
        isLoading={isUploading}
      />
    </ScrollView>
  );
};

export default Create;
