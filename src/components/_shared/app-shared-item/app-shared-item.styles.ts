import theme from "@root/styles/theme";
import styled from "styled-components/native";

export const Root = styled.View``;

export const Card = styled.View`
  background-color: ${theme.COLORS.dark.card};
  border-radius: 6px;
  display: flex;
  padding: 10px;
  margin-bottom: 14px;
  min-height: 50px;
  padding-right: 0;
  padding-left: 16px;
`;
export const Title = styled.Text`
  color: ${theme.COLORS.dark.text};
  font-size: 13px;
  font-family: ${theme.FONTS.regular};
  margin-bottom: 4px;
`;

export const CardTitle = styled.Text`
  color: ${theme.COLORS.dark.text};
  font-size: 10px;
  font-family: ${theme.FONTS.regular};
`;

export const CardDetail = styled.Text`
  color: ${theme.COLORS.dark.primary};
  font-size: 12px;
  font-family: ${theme.FONTS.regular};
  margin-top: 2px;
`;
