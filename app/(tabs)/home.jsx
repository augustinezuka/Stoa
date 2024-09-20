import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Popular from "../../components/Popular";
import { StatusBar } from "expo-status-bar";



const Home = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <StatusBar/>
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text className="text-6xl text-blue-800">{item.id}</Text>
        )}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-center flex-row mb-6">
                <View>
                  <Text className="text-gray-700 font-pmedium text-2xl">
                    Hi,
                  </Text>
                  <Text className="text-3xl font-psemibold text-gray-800">
                    Augustine
                  </Text>
                </View>
                <View className="mt-1.5">
                  <Image
                    source={images.logoSmall}
                    className="w-9 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>
              <SearchInput />
              <View>
                <Text className="text-gray-700 font-pmedium text-2xl">
                Popular Products
                </Text>
              </View>
              <View>
              <Popular/>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
