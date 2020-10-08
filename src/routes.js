import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'


import CountersPage from './pages/CountersPage';
import ConfigPage from './pages/ConfigPage';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
// Icon.loadFont()

function MyTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#fff',
        style: {
          backgroundColor: '#7159c1',
          // paddingBottom: '10',
        },
      }}
    >
      <Tab.Screen 
        name="CountersPage" 
        component={CountersPage} 
        options={{
          tabBarIcon: ({ }) => (
            <Icon name="home" color="#fff" size={30} />
          )
        }}
      />
      <Tab.Screen 
        name="ConfigPage" 
        component={ConfigPage}
        options={{
          tabBarIcon: ({ }) => (
            <Icon name="settings" color="#fff" size={30} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <AppStack.Screen 
          name="CountersPage" 
          component={MyTabs} 
          options={{ 
            title: 'Counters', 
            headerStyle: { backgroundColor: '#7159c1', margin: 'auto' },
            headerTintColor: '#fff'
          }} 
        />
        <AppStack.Screen name="ConfigPage" component={ConfigPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
