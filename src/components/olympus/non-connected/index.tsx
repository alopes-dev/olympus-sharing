import { useImageColors } from "@root/hooks";
import * as S from "./non-connected.styles";
import theme from "@root/styles/theme";

import { Ionicons, FontAwesome6, Feather, Entypo } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { ALL_OLYMPUS_SHAREABLE_DATA } from "../olympus.consts";
import { AppSharedItem } from "@root/components/_shared";
import { generatorKeys } from "@root/helpers";
import ButtonsActions from "./buttons-actions";
import { getSharedOlympusById } from "@root/services/get-shared-olympus";
import { useCallback, useEffect, useState } from "react";
import { TOlympus } from "@root/types";
import { useRoute } from "@react-navigation/native";
import { NonConnectedOlympusRouteProp } from "@root/navigation/navigation.types";

const URI = "https://avatars.githubusercontent.com/u/49714406?v=4";

const HEADER_MAX_HEIGHT = 320;
const HEADER_MIN_HEIGHT = 120;

const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const NonConnectedOlympus = () => {
  const [sharedOlympus, setSharedOlympus] = useState<TOlympus>();
  const [isLoading, setIsLoading] = useState(false);
  const {
    params: { olympusId },
  } = useRoute<NonConnectedOlympusRouteProp>();

  const handleGetSharedOlympusById = useCallback(async () => {
    setIsLoading(true);
    if (olympusId) {
      const sharedOlympusResult = await getSharedOlympusById(olympusId);
      setSharedOlympus(sharedOlympusResult ?? []);
      setIsLoading(false);
    }
  }, [olympusId]);

  useEffect(() => {
    handleGetSharedOlympusById();
  }, [handleGetSharedOlympusById]);

  const { colors } = useImageColors({
    url: sharedOlympus?.picture ?? "",
  });

  console.log(sharedOlympus);

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

  const descriptionAnimatedStyles = useAnimatedStyle(() => {
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

  const avatarAnimatedStyles = useAnimatedStyle(() => {
    const scaleInterpolate = interpolate(
      scrollY.value,
      [0, HEADER_MAX_HEIGHT],
      [1, 0.6],
      Extrapolation.CLAMP
    );
    const opacityInterpolate = interpolate(
      scrollY.value,
      [0, HEADER_MIN_HEIGHT + 80],
      [1, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity: opacityInterpolate,
      transform: [
        {
          scale: scaleInterpolate,
        },
      ],
    };
  });

  return (
    <S.Root>
      <S.Header style={headerAnimatedStyles}>
        <Animated.View style={avatarAnimatedStyles}>
          <S.AvatarContainer
            colors={[colors?.background, theme.COLORS.dark.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <S.Avatar source={{ uri: sharedOlympus?.picture }} />
          </S.AvatarContainer>
        </Animated.View>
        <S.OlympusName>{sharedOlympus?.name}</S.OlympusName>
        <S.DescriptionContainer style={descriptionAnimatedStyles}>
          <S.OlympusCompanyNameContainer>
            <S.OlympusCompany>
              Group Fitness Instrutor/ Personal Trainer at Fitness Life
            </S.OlympusCompany>
          </S.OlympusCompanyNameContainer>
          <S.OlympusAddress>Los Angeles, CA</S.OlympusAddress>
        </S.DescriptionContainer>
      </S.Header>

      <ButtonsActions />

      <Animated.ScrollView
        style={{
          paddingTop: 15,
          paddingLeft: 15,
          paddingRight: 15,
        }}
        contentContainerStyle={{ paddingBottom: HEADER_MIN_HEIGHT }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {ALL_OLYMPUS_SHAREABLE_DATA.map((item, index) => (
          <AppSharedItem
            sharebleData={item as any}
            key={generatorKeys("AppSharedItem")}
          />
        ))}
      </Animated.ScrollView>
    </S.Root>
  );
};

export default NonConnectedOlympus;
