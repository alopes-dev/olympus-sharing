import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import theme from "@root/styles/theme";
import Animated from "react-native-reanimated";

type BannerProps = {
  $backgroundColor: string;
};

export const Root = styled.ScrollView`
  flex: 1;
`;
export const Banner = styled(Animated.View)<BannerProps>`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${(p: BannerProps) => p.$backgroundColor};
  overflow: hidden;
  z-index: 99;
`;

export const ImageBackgroundContainer = styled(Animated.View)`
   flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BannerImage =  styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const IconButtons = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: ${RFPercentage(45)}px;
`;

export const IconButton = styled.TouchableOpacity`
  background-color: #46424f;
  width: ${RFPercentage(10)}px;
  height: 40px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

export const IconButtonText = styled.Text`
  font-size: 9px;
  color: white;
  font-family: ${theme.FONTS.regular};
  margin-top: 1px;
`;
