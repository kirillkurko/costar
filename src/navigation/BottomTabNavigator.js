import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorRouts } from '../variables/navigationRouts';
import DailyMatchup from '../screens/DailyMatchup';
import SingleMatchup from '../screens/SingleMatchup';
import DoubleMatchup from '../screens/DoubleMatchup';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={BottomTabNavigatorRouts.Daily}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={BottomTabNavigatorRouts.Personality}
        component={SingleMatchup}
      />
      <Tab.Screen
        name={BottomTabNavigatorRouts.Daily}
        component={DailyMatchup}
      />
      <Tab.Screen
        name={BottomTabNavigatorRouts.Compatibility}
        component={DoubleMatchup}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
