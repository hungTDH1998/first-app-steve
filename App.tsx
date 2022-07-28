import React, { Component } from 'react'

import HomeScreen from './Screens/Home';
import Chatchannel from './Screens/Chatchannel';
import ProfileScreen from './Screens/Profile';
import Survey from './Screens/Survey';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createMaterialBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer >
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'purple' }} activeColor="white" >
      <Tab.Screen name="Home" component={HomeScreen}        
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Search" component={Survey}        // Search Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document-multiple" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Chatchannel" component={Chatchannel}      // Channel Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Profile" component={ProfileScreen}            // Profile Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
        ),
    }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
