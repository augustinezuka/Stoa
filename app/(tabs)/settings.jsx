import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons"; // Correct import for icons

const settingsOptions = [
  { id: "1", title: "Account Information", icon: "person-outline" },
  { id: "2", title: "Change Password", icon: "lock-closed-outline" },
  {
    id: "3",
    title: "Two-Factor Authentication",
    icon: "shield-checkmark-outline",
  },
  { id: "4", title: "Privacy Settings", icon: "lock-open-outline" },
  { id: "5", title: "Manage Notifications", icon: "notifications-outline" },
  { id: "13", title: "Account Recovery", icon: "key-outline" },
  { id: "7", title: "Data Management", icon: "folder-outline" },
  { id: "6", title: "Billing", icon: "cash-outline" },
  { id: "8", title: "Privacy Policy", icon: "shield-outline" },
  { id: "9", title: "Terms of Service", icon: "document-text-outline" },
  { id: "10", title: "Feedback & Suggestions", icon: "chatbubbles-outline" },
  { id: "11", title: "Help & Support", icon: "help-circle-outline" },
  { id: "12", title: "About Us", icon: "information-circle-outline" },
  { id: "14", title: "Log Out", icon: "log-out-outline" },
];

const Settings = () => {
  const handleOptionPress = (option) => {
    // Handle option selection, e.g., navigate to the respective screen
    console.log(`Selected: ${option.title}`);
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <StatusBar style="dark" />
      <View className="pr-4 pl-3 py-9">
        <Text className="text-4xl font-psemibold my-5 text-secondary mb-6">Settings</Text>

        <FlatList
          data={settingsOptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row items-center py-7 px-4 my-1 bg-blue-50  rounded-lg mb-2 shadow"
              onPress={() => handleOptionPress(item)}
            >
              <Ionicons name={item.icon} size={24} color="#4B5563" />
              <Text className="ml-4  text-lg text-gray-800">{item.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 20 }} // Adds padding at the bottom
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
