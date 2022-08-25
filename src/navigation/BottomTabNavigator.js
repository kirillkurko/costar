import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorRouts } from '../variables/navigationRoutes';
import { Text, View } from 'react-native';
import DailyMatchup from '../screens/DailyMatchup';

const Tab = createBottomTabNavigator();

function PersonalityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Personality!</Text>
    </View>
  );
}

function DailyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Daily!</Text>
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
    <Tab.Navigator initialRouteName={BottomTabNavigatorRouts.Daily}>
      <Tab.Screen
        name={BottomTabNavigatorRouts.Personality}
        component={PersonalityScreen}
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
