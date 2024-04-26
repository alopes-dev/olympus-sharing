import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome6, AntDesign } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { DiscoveryScreen, SharedInScreen } from '@root/screens'
import OlympusScreen from '@root/screens/olympus'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      sceneContainerStyle={{
        backgroundColor: theme.COLORS.dark.background,
      }}
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: theme.COLORS.dark.activeTintColor,
        tabBarInactiveTintColor: theme.COLORS.dark.inactiveTintColor,
        tabBarLabelPosition: 'below-icon',
        tabBarIconStyle: {
          marginBottom: 4,
        },
        tabBarStyle: {
          height: 95,
          backgroundColor: theme.COLORS.dark.shape,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="appstore-o" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Shared in"
        component={SharedInScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="user-astronaut" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="Chats"
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-outline" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Olympus"
        component={OlympusScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="dingding" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}
