import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackNavigatorRouts } from '../variables/navigationRouts';
import BottomTabNavigator from './BottomTabNavigator';
import Feedback from '../screens/Feedback/Feedback';
import { Text, View } from 'react-native';

const RootStack = createStackNavigator();

function Sample() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{RootStackNavigatorRouts.Privacy}</Text>
    </View>
  );
}

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={RootStackNavigatorRouts.TabNavigator}
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={RootStackNavigatorRouts.TabNavigator}
        component={BottomTabNavigator}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Privacy}
        component={Sample}
      />
      <RootStack.Screen name={RootStackNavigatorRouts.FAQ} component={Sample} />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Feedback}
        component={Feedback}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.SubscribeFirstVariant}
        component={Sample}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Gift}
        component={Sample}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Terms}
        component={Sample}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
