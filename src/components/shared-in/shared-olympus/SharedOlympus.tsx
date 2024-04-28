import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as S from "./shared-olympus.styles";
import theme from "@root/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { SharedOlympusProps } from ".";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@root/navigation/navigation.types";
import { AppDivider } from "@root/components/_shared";

export const SharedOlympus = ({ olympus }: SharedOlympusProps) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <S.Root
        onPress={() => {
          navigate("NonConnectedOlympus", { olympusId: olympus.id });
        }}
      >
        <S.OlympusInWrapper>
          <S.AvatarContainer>
            <S.OlympusInAvatar
              source={{
                uri: olympus?.picture ?? "",
              }}
            />
            {olympus.isOnline && (
              <S.OlympusOnlineCircle
                stype={{
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.3,
                  shadowRadius: 15,
                }}
              />
            )}
          </S.AvatarContainer>
          <S.OlympusInContainer>
            <S.OlympusInName>{olympus?.name}</S.OlympusInName>
            <S.OlympusAvailableContainer>
              <S.OlympusAvailable>{olympus?.phone}</S.OlympusAvailable>
            </S.OlympusAvailableContainer>
          </S.OlympusInContainer>
        </S.OlympusInWrapper>
        <S.OlympusIconsWrapper>
          <S.OlympusIcon>
            <Feather name="phone" color={theme.COLORS.dark.success} size={18} />
          </S.OlympusIcon>
          <S.OlympusIcon>
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={theme.COLORS.dark.primary}
              size={20}
            />
          </S.OlympusIcon>
        </S.OlympusIconsWrapper>
      </S.Root>
      <S.DividerContainer>
        <AppDivider />
      </S.DividerContainer>
    </>
  );
};
