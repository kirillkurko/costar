import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackNavigatorRouts } from '@variables/navigationRoutes';
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={RootStackNavigatorRouts.TabNavigator}
        component={BottomTabNavigator}
      />
      <RootStack.Screen name={RootStackNavigatorRouts.Privacy} />
      <RootStack.Screen name={RootStackNavigatorRouts.FAQ} />
      <RootStack.Screen name={RootStackNavigatorRouts.Feedback} />
      <RootStack.Screen name={RootStackNavigatorRouts.SubscribeFirstVariant} />
      <RootStack.Screen name={RootStackNavigatorRouts.Gift} />
      <RootStack.Screen name={RootStackNavigatorRouts.Terms} />
    </RootStack.Navigator>
  );
};
