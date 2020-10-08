import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CountersPage from './pages/CountersPage'
import ConfigPage from './pages/ConfigPage'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle:{
            backgroundColor: '#fff'
          }
        }}
      >
        <AppStack.Screen name="CountersPage" component={CountersPage} />
        <AppStack.Screen name="ConfigPage" component={ConfigPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes