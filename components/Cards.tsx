import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

interface Props {
  item: Models.Document;
  onPress?: () => void;
}

export const FeaturedCard = ({
  item: { image, name, address, rating, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className=" flex flex-col items-start h-80 w-60 relative"
    >
      <Image
        source={{ uri: image }}
        className="size-full rounded-2xl"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
        style={{ width: "100%", height: "100%" }}
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute right-8 top-5">
        <Image
          source={icons.star}
          className="size-3.5"
          style={{ width: 14, height: 14 }}
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {rating}
        </Text>
      </View>
      <View className="flex flex-col items-start bottom-5 absolute inset-x-5">
        <Text
          numberOfLines={1}
          className="text-white font-rubik-extrabold text-xl"
        >
          {name}
        </Text>
        <Text numberOfLines={1} className="text-base font-rubik text-white">
          {address}
        </Text>
        <View className="flex flex-row item-center justify-between w-full">
          <Text className="text-white text-xl font-rubik-extrabold">
            ${price}
          </Text>
          <Image
            source={icons.heart}
            className="size-5"
            style={{ width: 20, height: 20 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const Card = ({
  item: { image, name, address, rating, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex flex-row items-center bg-white/90 px-2 py-1.5 rounded-full absolute right-5 top-5 z-50">
        <Image
          source={icons.star}
          className="size-2.5"
          style={{ width: 10, height: 10 }}
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {rating}
        </Text>
      </View>
      <Image
        source={{ uri: image }}
        className="w-full h-40 rounded-lg"
        style={{ width: "100%", height: 160 }}
      />
      <View className="flex flex-col mt-2">
        <Text className="text-black-300 font-rubik-bold text-base">{name}</Text>
        <Text numberOfLines={1} className="text-xs font-rubik text-black">
          {address}
        </Text>
        <View className="flex flex-row item-center justify-between mt-2">
          <Text className="text-primary-300 text-base font-rubik-bold">
            ${price}
          </Text>
          <Image
            source={icons.heart}
            className="size-5 mr-2"
            style={{ width: 20, height: 20 }}
            tintColor="#191d31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
