import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    // Submit logic here...
  };

  const signInWithGoogle = () => {
    // Google sign-in logic here...
    alert("Google sign-in pressed");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <View className="flex-row mb-6 items-center">
            <Image
              source={images.logo}
              className="w-[90px] h-[54px]"
              resizeMode="contain"
            />
            <Text
              className="font-psemibold text-5xl mt-4 underline text-secondary"
              style={{ lineHeight: 84 }}
            >
              STOA
            </Text>
          </View>
          <Text className="text-2xl ml-3 font-psemibold">
            Welcome back please sign in to continue
          </Text>

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
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(text) => setForm({ ...form, password: text })}
            otherStyles="mt-7"
            secureTextEntry={true}
          />

          <Text className="ml-3 mt-3 text-blue-500 text-lg">
            <Link href={""}>Forgot password ?</Link>
          </Text>

          {/* Sign In Button */}
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7 mx-4 bg-secondary"
            isLoading={isSubmitting}
          />

          {/* Continue with Google */}
          <CustomButton
            title={
              <>
                <Image source={require("assets/images/Google.png")} /> Continue
                with Google
              </>
            }
            handlePress={signInWithGoogle}
            containerStyles="mt-5 mx-4 "
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-xl font-psemibold">
              Don't have an account ?{" "}
              <Link href={"sign-up"} className="text-blue-500">
                Sign Up
              </Link>
            </Text>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm ">
              By signing in I have read and I agree with Stoa's{" "}
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

export default SignIn;
