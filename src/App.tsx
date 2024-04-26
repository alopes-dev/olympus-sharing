import 'react-native-gesture-handler'
import 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { ActivityIndicator, Text, View } from 'react-native'

import {
  useFonts,
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  JetBrainsMono_700Bold,
} from '@expo-google-fonts/jetbrains-mono'
import theme from './styles/theme'
import { RouteNavigation } from './navigation'

export default function App() {
  const [isFontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_700Bold,
  })

  if (!isFontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <RouteNavigation />
        <StatusBar style="light" />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
