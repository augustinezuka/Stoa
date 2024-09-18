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
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              // Change the icon's name based on the focused state
              const iconSize = focused ? 28 : 24; // Adjust this if you have different icons for focused state
              // Change the color based on the focused state
              const iconColor = focused ? "#004c99" : "#b0b0b0"; // Example colors, adjust as needed

              return (
                <>
                  <AntDesign name="home" size={iconSize} color={iconColor} />
                  <View>
                    <Text>Home</Text>
                  </View>
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              // Change the icon's name based on the focused state
              const iconSize = focused ? 26 : 24; // Adjust this if you have different icons for focused state
              // Change the color based on the focused state
              const iconColor = focused ? "#004c99" : "#b0b0b0"; // Example colors, adjust as needed

              const iconName = focused ? "bookmarks" : "bookmarks-outline";
              return (
                <>
                  <Ionicons name={iconName} size={iconSize} color={iconColor} />
                  <View>
                    <Text>Whishlist</Text>
                  </View>
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Post",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              // Change the icon's name based on the focused state
              const iconSize = focused ? 28 : 24; // Adjust this if you have different icons for focused state
              // Change the color based on the focused state
              const iconColor = focused ? "#004c99" : "#b0b0b0"; // Example colors, adjust as needed

              const iconName = focused ? "plus" : "plus";
              return (
                <>
                  <AntDesign
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                  />
                  <View>
                    <Text>Post</Text>
                  </View>
                </>
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
              // Change the icon's name based on the focused state
              const iconSize = focused ? 28 : 24; // Adjust this if you have different icons for focused state
              // Change the color based on the focused state
              const iconColor = focused ? "#004c99" : "#b0b0b0"; // Example colors, adjust as needed

              const iconName = focused ? "user" : "user-o";
              return (
                <>
                  <FontAwesome
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                  />
                  <View>
                    <Text>Me</Text>
                  </View>
                </>
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
              // Change the icon's name based on the focused state
              const iconSize = focused ? 28 : 24; // Adjust this if you have different icons for focused state
              // Change the color based on the focused state
              const iconColor = focused ? "#004c99" : "#b0b0b0"; // Example colors, adjust as needed

              const iconName = focused ? "settings" : "settings-outline";
              return (
                <>
                  <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                  />
                  <View>
                    <Text>Settings</Text>
                  </View>
                </>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
