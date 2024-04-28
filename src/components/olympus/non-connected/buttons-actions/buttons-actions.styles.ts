import theme from "@root/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Root = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 16px;
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
