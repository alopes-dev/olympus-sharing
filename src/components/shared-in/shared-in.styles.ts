import theme from '@root/styles/theme'
import styled from 'styled-components/native'

export const Root = styled.View`
  flex: 1;
`
export const SharedOlympusTitle = styled.Text`
  color: ${theme.COLORS.dark.text};
  font-size: 15px;
  font-family: ${theme.FONTS.medium};
  margin: 10px 20px 20px;
`
