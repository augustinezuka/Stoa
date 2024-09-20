import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { Link, Redirect, router } from "expo-router";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (<GestureHandlerRootView>
  
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 16,
        }}
      >
        <View className="w-full justify-center items-center">
          <View className="flex-row justify-center mb-6 items-center">
            <Image
              source={images.logo}
              className="w-[100px] h-[94px]"
              resizeMode="contain"
            />
            <Text
              className="font-psemibold text-7xl mt-4 underline text-secondary"
              style={{ lineHeight: 84 }}
            >
              STOA
            </Text>
          </View>
          <Image
            source={images.card}
            className="w-[350px] h-[350px]"
            resizeMode="contain"
          />

          {/* Welcome Message */}
          <View className="relative mt-4">
            <Text className="text-3xl font-psemibold text-center text-secondary">
              Welcome to <Text className="font-pbold">STOA</Text> —
              your gateway to limitless discoveries.
            </Text>
          </View>

          {/* Descriptive Text */}
          <Text className="text-lg text-center text-slateGray mt-4 font-pregular px-6">
            Discover endless possibilities, explore exclusive products, and
            redefine your shopping experience with Stoa.
          </Text>

          {/* Action Button */}
          <CustomButton
            title="Continue to log in"
            handlePress={() => router.push("/sign-up")}
            containerStyles="w-full mt-8 py-3 rounded-lg bg-secondary"
            textStyle="text-white text-xl font-semibold"
          />
          <Link href={'home'}><Text className='text-4xl'>Production</Text></Link>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  </GestureHandlerRootView>
  );
}
