import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="relative">
      <TextInput
        value={value}
        placeholder='Search for products'
        onChangeText={handleChangeText}
        className="border focus:bg-lightBlue border-gray-300 p-2 rounded-lg focus:border-0 focus:border-b-4 focus:border-secondary pr-10" // Added padding-right for the icon
        {...props}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity
        className="absolute right-2 top-8"
        onPress={() => {
          // Add any onPress functionality here
        }}
      >
        <FontAwesome name="search" size={24} color="#004c99" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
