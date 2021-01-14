import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Platform} from 'react-native'

import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TabBarIcon from '../components/TabBarIcon';



const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TransitionStack = () => {
  return(
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen  component={} name="Transaction"/>
      <Stack.Screen  component={} name="Transaction Details"/>
    </Stack.Navigator>
  )
}

const BottomTabNavigator = () => {

  return (
    <BottomTab.Navigator headerMode = {"none"}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({focused}) => 
        <TabBarIcon focused={focused} name="bank" />
       }}
      />
      <BottomTab.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{ tabBarIcon: ({focused}) => 
        <TabBarIcon focused={focused} name="dollar" />
       }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={TransitionStack}
        options={{ tabBarIcon: ({focused}) => 
        <TabBarIcon focused={focused} name="credit-card" />
       }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

