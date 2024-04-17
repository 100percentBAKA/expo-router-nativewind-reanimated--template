import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View className="flex-col gap-2 items-center">
      <Image
        source={icon}
        tintColor={color}
        resizeMode="contain"
        className="w-6 h-6"
      />
      <Text style={{ color: color }}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {/* Home tab */}
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Home"
              />
            ),
          }}
        />

        {/* Create tab */}
        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Create"
                icon={icons.plus}
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        {/* Bookmark tab */}
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Bookmark"
                color={color}
                focused={focused}
                icon={icons.bookmark}
              />
            ),
          }}
        />

        {/* Profile tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Profile"
                color={color}
                focused={focused}
                icon={icons.profile}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
