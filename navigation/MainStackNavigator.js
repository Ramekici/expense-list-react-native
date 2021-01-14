import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native'


const Stack = createStackNavigator();

export default function MainNavigator() {

  return (
    <Stack.Navigator
        headerMode = {"none"}
    >
      <Stack.Screen
        name="Entry"
        component={EntryScreen}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen
        name="Root"
        component={ButtomTabNavigator}
      />
    </Stack.Navigator>
  );
}