import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { theme } from "../themes/index";
import { categoryData } from "@/constants";
const Categories = () => {
  return (
    <GestureHandlerRootView className="space-y-5">
      <View className="mx-5 flex-row justify-between items-center mb-3">
        <Text
          style={{ fontSize: wp(4) }}
          className="font-semibold text-neutral-700"
        >
          Categories
        </Text>

        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* categories */}

      <ScrollView
        horizontal
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {categoryData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-2 "
              style={{ marginRight: 10.5 }}
            >
              <Image
                // source={require("../cars/viet3.webp")}
                source={cat.image}
                className="rounded-3xl"
                style={{ width: wp(20), height: hp(10) }}
              />
              <Text
                className="text-neutral-700 font-semibold"
                style={{ fontSize: wp(4) }}
              >
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Categories;
