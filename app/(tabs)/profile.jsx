import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { RefreshControl } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons"; // For icons
import EmptyState from "../../components/EmptyState";

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Fetch new data from API
    // await fetchData();
    setRefreshing(false);
  };

  const userPosts = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Replace with actual user posts

  return (
    <SafeAreaView className="bg-primary flex-1">
      <StatusBar style="dark" />
      <FlatList
        data={userPosts}
        keyExtractor={(item) => item.id.toString()} // Ensure IDs are strings
        renderItem={({ item }) => (
          <TouchableOpacity className="p-4 border-b border-gray-300">
            <Text className="text-xl text-blue-800">Post {item.id}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            {/* Header Section */}
            <View className="flex-row items-center justify-between mb-6">
              <Image
                source={images.profilePicture} // Replace with actual user profile picture
                className="w-16 h-16 rounded-full"
                resizeMode="cover"
              />
              <View className="flex-1 ml-4">
                <Text className="text-gray-500 font-pmedium text-xl">
                  Hello,
                </Text>
                <Text className="text-3xl font-psemibold text-gray-900">
                  Augustine!
                </Text>
              </View>
              <TouchableOpacity>
                <Icon name="settings-outline" size={30} color="#6B7280" />
              </TouchableOpacity>
            </View>

            {/* Bio Section */}
            <View className="bg-white p-4 rounded-lg shadow-sm">
              <Text className="text-gray-800 font-pmedium">Bio:</Text>
              <Text className="text-gray-600">
                Front-end developer passionate about creating engaging user
                experiences.
              </Text>
            </View>

            {/* User Posts Section */}
            <Text className="text-gray-700 font-pmedium text-2xl">
              Your Posts
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No posts found"
            subtitle="Create your first post!"
            buttonTitle="Start Creating"
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // Ensures the scroll reaches the bottom smoothly
      />
    </SafeAreaView>
  );
};

export default Profile;
