import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorRouts } from '../variables/navigationRouts';
import { Text, View } from 'react-native';
import DailyMatchup from '../screens/DailyMatchup';
import SingleMatchup from '../screens/SingleMatchup';

const Tab = createBottomTabNavigator();

function PersonalityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Personality!</Text>
    </View>
  );
}

function CompatibilityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Compatibility!</Text>
    </View>
  );
}

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
        component={CompatibilityScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
