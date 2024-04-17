import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/customButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* // ! if the content is larger than the screen height, contentContainerStyle make the screen scrollable */}
        <View className="w-full h-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[85px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View>
            <Text className="text-white font-bold text-center text-3xl">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="absolute -bottom-2 -right-8 w-[136px] h-[15px]"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("sign-in")}
            containerStyles="w-full mt-8"
          />
        </View>
      </ScrollView>

      {/* // ! StatusBar (notification widgets) */}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
