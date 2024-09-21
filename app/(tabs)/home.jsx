import { View, Text, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Popular from "../../components/Popular";
import { StatusBar } from "expo-status-bar";
import EmptyState from "../../components/EmptyState";
import Icon from "react-native-vector-icons/Ionicons"; // For icons
import { RefreshControl } from "react-native-gesture-handler";

const Home = () => {
  const [refreshing, setRefresshing] = useState(false);

  const onRefresh = async () => {
    setRefresshing(true);
    // Fetch new data from API
    // await fetchData();
    setRefresshing(false);
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <StatusBar style="dark" />
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]} // Replace with actual data
        keyExtractor={(item) => item.id.toString()} // Ensure IDs are strings
        renderItem={({ item }) => (
          <Text className="text-6xl text-blue-800">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            {/* Header Section */}
            <View className="justify-between items-center flex-row mb-6">
              <View className="flex-row items-center space-x-2">
                <View>
                  <Text className="text-gray-500 font-pmedium text-2xl">
                    Hello
                  </Text>
                  <Text className="text-4xl font-psemibold text-gray-900">
                    Augustine!
                  </Text>
                </View>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-10 h-12"
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Search Input */}
            <SearchInput />

            {/* Trending Products Section */}
            <View className="flex-row items-center space-x-2">
              <Text className="text-gray-700 font-pmedium text-2xl">
                Trending Products
              </Text>
              <Icon name="trending-up-outline" size={24} color="#6B7280" />
            </View>

            {/* Popular Products */}
            <View>
              <Popular posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No products found"
            subtitle="Stay tuned! New items coming soon."
            buttonTitle="Explore Categories"
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

export default Home;
