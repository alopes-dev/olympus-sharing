import theme from "@root/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Root = styled.View`
  flex: 1;
`;

export const Header = styled(Animated.View)`
  background-color: ${theme.COLORS.dark.shape};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const DescriptionContainer = styled(Animated.View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarContainer = styled(LinearGradient)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-top: 50px;
`;

export const OlympusName = styled.Text`
  font-size: 20px;
  font-family: ${theme.FONTS.medium};
  color: ${theme.COLORS.dark.text};
  margin-top: 16px;
  margin-bottom: 10px;
`;

export const OlympusCompanyNameContainer = styled.View`
  width: 250px;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

export const OlympusCompany = styled.Text`
  font-size: 15px;
  font-family: ${theme.FONTS.regular};
  color: ${theme.COLORS.dark.text};
  text-align: center;
`;

export const OlympusAddress = styled.Text`
  font-size: 12px;
  font-family: ${theme.FONTS.regular};
  color: ${theme.COLORS.dark.text_dark};
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  flex: 1;
  margin: 4px;
  background-color: #fff;
  justify-content: center;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonOptions = styled.View`
  flex-direction: row;
  margin-top: 16px;
  gap: 16px;
`;

export const Button = styled.Pressable`
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 8px;
  padding: 10px;
  background-color: ${theme.COLORS.dark.primary};
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: ${theme.FONTS.regular};
  color: ${theme.COLORS.dark.text};
`;
