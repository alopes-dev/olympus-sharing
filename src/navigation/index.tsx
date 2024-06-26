import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

export function RouteNavigation() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
