import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80, // Increase the height to your desired value
            backgroundColor: "#f0f8ff.", // Change this to your desired color
            paddingVertical: 10, // Add padding to move tabs higher
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              const iconSize = focused ? 28 : 24;
              const iconColor = focused ? "#004c99" : "#9a9a9a";
              return (
                <View style={{ alignItems: "center" }}>
                  <AntDesign name="home" size={iconSize} color={iconColor} />
                  <Text style={{ fontSize: 12, color: iconColor }}>Home</Text>
                </View>
              );
            },
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Upload",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              const iconSize = focused ? 28 : 26;
              const iconColor = focused ? "#004c99" : "#9a9a9a";
              return (
                <View style={{ alignItems: "center" }}>
                  <AntDesign name="plus" size={iconSize} color={iconColor} />
                  <Text style={{ fontSize: 12, color: iconColor }}>Post</Text>
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              const iconSize = focused ? 28 : 24;
              const iconColor = focused ? "#004c99" : "#9a9a9a";
              return (
                <View style={{ alignItems: "center" }}>
                  <FontAwesome
                    name={focused ? "user" : "user-o"}
                    size={iconSize}
                    color={iconColor}
                  />
                  <Text style={{ fontSize: 12, color: iconColor }}>Me</Text>
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              const iconSize = focused ? 28 : 24;
              const iconColor = focused ? "#004c99" : "#9a9a9a";
              return (
                <View style={{ alignItems: "center" }}>
                  <Ionicons
                    name={focused ? "settings" : "settings-outline"}
                    size={iconSize}
                    color={iconColor}
                  />
                  <Text style={{ fontSize: 12, color: iconColor }}>
                    Settings
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
