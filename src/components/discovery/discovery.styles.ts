import theme from '@root/styles/theme'
import styled from 'styled-components/native'

export const Root = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const OlympusNears = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 6px 16px 0px 16px;
`

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;

  background-color: white;
  margin-right: -8px;
  border-radius: 25px;
  border-width: 2px;
  border-color: ${theme.COLORS.dark.primary};
`

export const AvatarsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const OverXOlympusNearText = styled.Text`
  margin-left: 24px;
  color: ${theme.COLORS.dark.text};
`
