import { View, Text, FlatList } from "react-native";
import React from "react";

const Popular = ({ posts }) => {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-6xl text-blue-800">{item.id}</Text>
        )}
        horizontal
      />
    </View>
  );
};

export default Popular;
