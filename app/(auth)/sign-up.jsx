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

const SignUp = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "your-google-client-id.apps.googleusercontent.com",
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        navigation.navigate("home"); // Redirect to home if the user is signed in
      }
    };

    checkUser();
  }, []);

  const submit = async () => {
    if (form.password !== form.confirmPassword) {
      return Alert.alert("Error", "Passwords do not match");
    }

    setIsSubmitting(true);

    try {
      const { user, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      Alert.alert("Success", "Check your email for verification.");
      navigation.navigate("Home"); // Optionally navigate to home screen after sign-up
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      signUpWithGoogle(id_token);
    }
  }, [response]);

  const signUpWithGoogle = async (idToken) => {
    const { user, error } = await supabase.auth.signInWithIdToken({ idToken });
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Signed in with Google!");
      navigation.navigate("Home"); // Navigate to home screen after Google sign-in
    }
  };

  const handleGoogleSignIn = () => {
    promptAsync();
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full justify-center h-full px-4 my-6">
          <View className="flex-row mb-6 items-center">
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
            Join us and explore the world of limitless possibilities.
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

          <CustomButton
            title="Sign Up"
            handlePress={submit}
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
                  style={{ width: 34, height: 34 }}
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
              Already have an account?{" "}
              <Link href={"sign-in"} className="text-blue-500">
                Sign In
              </Link>
            </Text>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm ">
              By signing up I have read and I agree with Stoa's{" "}
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

export default SignUp;
