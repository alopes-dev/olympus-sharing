import theme from "@root/styles/theme";
import styled from "styled-components/native";

export const Root = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

export const OlympusInWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OlympusIconsWrapper = styled.View`
  margin-right: 10px;
  flex-direction: row;
  gap: 10px;
`;

export const OlympusIcon = styled.TouchableOpacity`
  background-color: ${theme.COLORS.dark.shape};
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const AvatarContainer = styled.View`
  flex-direction: row;
  position: relative;
`;

export const OlympusInAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-left: 16px;
`;

export const OlympusOnlineCircle = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 25px;
  background-color: ${theme.COLORS.dark.success};

  position: absolute;
  right: 0px;
  bottom: 1px;

  border-width: 2px;
  border-color: white;
`;

export const OlympusInContainer = styled.View`
  margin-left: 16px;
`;

export const OlympusInName = styled.Text`
  color: ${theme.COLORS.dark.text};
  font-size: 14px;
  font-family: ${theme.FONTS.medium};
`;
export const OlympusAvailableContainer = styled.View`
  flex-direction: row;
`;

export const OlympusAvailable = styled.Text`
  color: ${theme.COLORS.dark.text_dark};
  font-size: 10px;
  font-family: ${theme.FONTS.regular};
`;
export const OlympusOline = styled.Text`
  color: ${theme.COLORS.dark.success};
  font-size: 10px;
  font-family: ${theme.FONTS.regular};
`;

export const DividerContainer = styled.View`
  padding: 5px 20px 0px 20px;
`;

export const Divider = styled.View`
  height: 0.4px;
  background-color: #e2e5e9;
  margin: 10px 0;
`;
