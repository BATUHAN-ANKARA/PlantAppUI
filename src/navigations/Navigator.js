import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import {Image} from 'react-native'

const Tab = createBottomTabNavigator()
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          justifyContent: 'center',
          paddingVertical: 15,
          backgroundColor: '#eff4f0',
          elevation: 2,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../images/8.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Favourite'
        component={Favourite}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../images/9.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../images/10.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={BottomTabNavigator} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
