import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../themes/index";
import { categoryData } from "@/constants";
import { HeartIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";

const Destinations = () => {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {categoryData.map((cat, index) => {
        return <DestinationCard item={cat} key={index} />;
      })}
    </View>
  );
};

const DestinationCard = ({ item }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <TouchableOpacity
      style={{ width: wp(44), height: wp(65) }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
    >
      <Image
        source={item.image}
        style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
        className="absolute"
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        onPress={() => setFavorite(!favorite)}
        style={{ backgroundColor: `rgba(255,255,255,0.4)` }}
        className="absolute top-1 right-3 rounded-full p-3"
      >
        <HeartIcon size={wp(5)} color={favorite ? "red" : "white"} />
      </TouchableOpacity>

      <Text className="text-white font-semibold" style={{ fontSize: wp(4) }}>
        {item.title}
      </Text>

      <Text className="text-white font-medium" style={{ fontSize: wp(2.2) }}>
        Hospitality levels so high
      </Text>
    </TouchableOpacity>
  );
};

export default Destinations;
