import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    // Submit logic here...
  };

  const signUpWithGoogle = () => {
    // Google sign-up logic here...
    alert("Google sign-up pressed");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full justify-center h-full px-4 my-6">
          {/* Logo Section */}
          <View className="flex-row mb-6 items-center ">
            <Image
              source={images.logo}
              className="w-[90px] h-[54px]"
              resizeMode="contain"
            />
            <Text
              className="font-psemibold text-5xl mt-4 ml-2 underline text-secondary tracking-wide"
              style={{ lineHeight: 84 }}
            >
              STOA
            </Text>
          </View>

          {/* Welcome Text */}
          <Text className="text-2xl ml-3 font-psemibold mb-4">
            Join us and explore the world of limitless possibilities.
          </Text>

          {/* Form Fields */}
          <FormField
            title="Name"
            value={form.name}
            placeholder="Enter your name"
            handleChangeText={(text) => setForm({ ...form, name: text })}
            otherStyles="mt-5"
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(text) => setForm({ ...form, email: text })}
            otherStyles="mt-5"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(text) => setForm({ ...form, password: text })}
            otherStyles="mt-5"
            secureTextEntry={true}
          />
          <FormField
            title="Confirm Password"
            value={form.confirmPassword}
            placeholder="Confirm your password"
            handleChangeText={(text) =>
              setForm({ ...form, confirmPassword: text })
            }
            otherStyles="mt-5"
            secureTextEntry={true}
          />

          {/* Sign Up Button */}
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7 mx-4 bg-secondary"
            isLoading={isSubmitting}
          />

          {/* Continue with Google */}
          <CustomButton
            title="Continue with Google"
            handlePress={signUpWithGoogle}
            containerStyles="mt-5 mx-4 "
          />

          {/* Sign In Link */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-xl font-psemibold">
              Already have an account?{" "}
              <Link href={"sign-in"} className="text-blue-500">
                Sign In
              </Link>
            </Text>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm ">
              By signing up I agree with Stoa's
              <Link href={"TermsAndConditions"} className="text-blue-500">
                Terms and conditons &copy;{new Date().getFullYear()}
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
