import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`ml-3 space-y-2 ${otherStyles}`}>
      <Text className="text-base text-darkGray">{title}</Text>
      <View className="relative">
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          className="border focus:bg-lightBlue border-gray-300 p-2 rounded-lg focus:border-0 focus:border-b-4 focus:border-secondary"
          {...props}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", right: 10, top: 10 }}
          >
            <FontAwesome5
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#004c99"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
