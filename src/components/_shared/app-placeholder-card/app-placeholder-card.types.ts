import { StyleProp, ViewStyle } from 'react-native'

export type AppPlaceholderCardProps = {
  style: StyleProp<ViewStyle> | Record<string, number | string>[]
  variant?: 'dark' | 'light'
  count?: number
  borderRadius?: number
  styleFirstCard?: StyleProp<ViewStyle> | Record<string, number | string>[]
}
