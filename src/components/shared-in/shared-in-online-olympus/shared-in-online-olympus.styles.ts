import theme from '@root/styles/theme'
import styled from 'styled-components/native'

export const Root = styled.View`
  padding: 10px;
  margin-bottom: 16px;
`

export const OlympusOlineTitle = styled.Text`
  color: ${theme.COLORS.dark.text};
  font-size: 15px;
  font-family: ${theme.FONTS.medium};
  margin: 10px 20px 20px;
`

export const OlympusAvailableContainer = styled.TouchableOpacity`
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

export const OlympusOlineAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 25px;
`

export const OlympusInContainer = styled.View`
  margin-left: 16px;
`

export const OlympusOnlineName = styled.Text`
  color: ${theme.COLORS.dark.text};
  font-size: 12px;
  font-family: ${theme.FONTS.regular};
`
