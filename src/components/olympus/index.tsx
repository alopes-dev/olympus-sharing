import React from "react";
import { Ionicons, Feather, Fontisto } from "@expo/vector-icons";

import * as S from "./olympus.styles";
import { useImageColors } from "@root/hooks";
import { View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  ALL_OLYMPUS_SHAREABLE_DATA,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  ICONS_BUTTONS_MAX_TOP,
  ICONS_BUTTONS_MIN_TOP,
  SCROLL_DISTANCE,
} from "./olympus.consts";
import { AppSharedItem } from "../_shared";

const URI = "https://avatars.githubusercontent.com/u/32274883?v=4";

const Olympus = () => {
  const scrollY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerAnimatedStyles = useAnimatedStyle(() => {
    const heightInterpolate = interpolate(
      scrollY.value,
      [0, SCROLL_DISTANCE],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      Extrapolation.CLAMP
    );
    return {
      height: heightInterpolate,
    };
  });

  const iconButtonsAnimatedStyles = useAnimatedStyle(() => {
    const topInterpolate = interpolate(
      scrollY.value,
      [0, HEADER_MIN_HEIGHT],
      [ICONS_BUTTONS_MAX_TOP, ICONS_BUTTONS_MIN_TOP],
      Extrapolation.CLAMP
    );
    return {
      top: topInterpolate,
    };
  });

  const backgroundImageAnimatedStyles = useAnimatedStyle(() => {
    const opacityInterpolate = interpolate(
      scrollY.value,
      [0, HEADER_MIN_HEIGHT],
      [1, 0],
      Extrapolation.CLAMP
    );
    return {
      opacity: opacityInterpolate,
    };
  });

  const { color } = useImageColors({
    url: URI,
  });

  return (
    <View>
      <S.Banner style={headerAnimatedStyles} $backgroundColor={color}>
        <S.ImageBackgroundContainer style={backgroundImageAnimatedStyles}>
          <S.BannerImage
            resizeMode="cover"
            source={{
              uri: URI,
            }}
          />
        </S.ImageBackgroundContainer>
        <S.IconButtons style={iconButtonsAnimatedStyles}>
          <S.IconButton>
            <Ionicons name="chatbubble-outline" color={"white"} size={20} />
          </S.IconButton>
          <S.IconButton>
            <Feather name="phone" color={"white"} size={20} />
          </S.IconButton>
          <S.IconButton>
            <Ionicons name="videocam-outline" color={"white"} size={22} />
          </S.IconButton>
          <S.IconButton>
            <Fontisto name="email" color={"white"} size={20} />
          </S.IconButton>
        </S.IconButtons>
      </S.Banner>
      <Animated.ScrollView
        style={{
          paddingTop: HEADER_MAX_HEIGHT + 15,
          paddingLeft: 15,
          paddingRight: 15,
        }}
        contentContainerStyle={{ paddingBottom: HEADER_MIN_HEIGHT + 200 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {ALL_OLYMPUS_SHAREABLE_DATA.map((item, index) => (
          <AppSharedItem
            sharebleData={item as any}
            key={Math.random().toString()}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Olympus;
