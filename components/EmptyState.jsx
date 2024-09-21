import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subtitle, buttonTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl font-psemibold text-gray-900">{subtitle}</Text>
      <Text className="text-gray-500 font-pmedium text-lg">{title}</Text>

      <CustomButton
        title={buttonTitle}
        onButtonPress={() => console.log("Navigating to categories")}
        containerStyles='w-full my-5'
     />
    </View>
  );
};

export default EmptyState;
