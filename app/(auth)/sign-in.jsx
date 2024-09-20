import "react-native-url-polyfill/auto";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { supabase } from "../../utils/supabase";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "your-google-client-id.apps.googleusercontent.com",
  });

  const signIn = async () => {
    setIsSubmitting(true);

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      Alert.alert("Success", "You have successfully signed in!");

      if (user) {
        navigation.navigate("Home");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      signInWithGoogle(id_token);
    }
  }, [response]);

  const signInWithGoogle = async (idToken) => {
    const { user, error } = await supabase.auth.signInWithIdToken({ idToken });
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Signed in with Google!");
      if (user) {
        navigation.navigate("/");
      }
    }
  };

  const handleGoogleSignIn = () => {
    promptAsync();
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full justify-center h-full px-4 my-6">
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

          <Text className="text-2xl ml-3 font-psemibold mb-4">
            Welcome back! Let's sign you in.
          </Text>

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

          <CustomButton
            title="Sign In"
            handlePress={signIn}
            containerStyles="mt-7 mx-4 bg-secondary"
            isLoading={isSubmitting}
          />

          <CustomButton
            title={
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/images/Google.png")}
                  style={{ width: 24, height: 24 }}
                />
                <Text className="ml-2 text-primary font-psemibold text-lg">
                  Continue with Google
                </Text>
              </View>
            }
            handlePress={handleGoogleSignIn}
            containerStyles="mt-5 mx-4"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-xl font-psemibold">
              Don't have an account?{" "}
              <Link href={"sign-up"} className="text-blue-500">
                Sign Up
              </Link>
            </Text>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm ">
              By signing in I have read and I agree with Stoa's{" "}
              <Link href={"TermsAndConditions"} className="text-blue-500">
                Terms and conditions &copy;{new Date().getFullYear()}
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
