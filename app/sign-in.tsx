import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="bg-white h-full">
        <Image
          source={images.onboarding}
          resizeMode="contain"
          className="w-full h-4/6 mt-3"
          style={{ width: "100%", height: "66vh" }}
        />
        <View className="px-10">
          <Text className="uppercase text-base text-center font-rubik text-black-200">
            Welcome To ReState
          </Text>
          <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 mb-8"
          >
            <View className="flex flex-row justify-center items-center">
              <Image
                source={icons.google}
                resizeMode="contain"
                className="w-5 h-5"
                style={{ width: 32, height: 32 }}
              />
              <Text className="text-lg font-rubik-medium text-black-200 ml-2 ">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
