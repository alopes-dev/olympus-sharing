import theme from '@root/styles/theme'
import styled from 'styled-components/native'

export const Root = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`

export const OlympusInWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const OlympusChatWrapper = styled.TouchableOpacity`
  margin-right: 10px;
`

export const OlympusInAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-left: 16px;
`

export const OlympusInContainer = styled.View`
  margin-left: 16px;
`

export const OlympusInName = styled.Text`
  color: ${theme.COLORS.dark.text};
  font-size: 14px;
  font-family: ${theme.FONTS.medium};
`
export const OlympusAvailableContainer = styled.View`
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
`

export const OlympusAvailable = styled.Text`
  color: ${theme.COLORS.dark.text_dark};
  font-size: 10px;
  font-family: ${theme.FONTS.regular};
`
export const OlympusOline = styled.Text`
  color: ${theme.COLORS.dark.success};
  font-size: 10px;
  font-family: ${theme.FONTS.regular};
`

export const OlympusIcon = styled.TouchableOpacity`
  background-color: ${theme.COLORS.dark.shape};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`
