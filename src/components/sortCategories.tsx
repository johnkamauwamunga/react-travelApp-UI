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
import { theme } from "../themes/index";
import { categoryData } from "@/constants";
const SortCategories = () => {
  const [activeSort, setActiveSort] = useState("Europe");
  return (
    <View
      className="flex-row justify-around items-center mx-2
     bg-neutral-100 rounded-full p-2 px-4 space-x-2"
    >
      {categoryData.map((cat, index) => {
        let isActive = cat.title == activeSort;
        let activeButtoClass = isActive ? "bg-white" : "";

        return (
          <TouchableOpacity
            key={index}
            style={{ paddingHorizontal: 3 }}
            onPress={() => setActiveSort(cat.title)}
            className={`px-3 rounded-full flex py-2 ${activeButtoClass}`}
          >
            <Text
              className="font-semibold"
              style={{
                fontSize: wp(4),
                color: isActive ? theme.text : "rgba(0,0,0,0.6)",
              }}
            >
              {cat.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortCategories;
