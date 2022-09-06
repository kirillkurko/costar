import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackNavigatorRouts } from '../variables/navigationRouts';
import BottomTabNavigator from './BottomTabNavigator';
import Feedback from '../screens/Feedback/Feedback';
import { Text, View } from 'react-native';
import OnboardingStackNavigator from './OnboardingStackNavigator';
import Privacy from '../screens/Privacy';
import SubscribeFirstVariant from '../screens/Subscribe/SubscribeFirstVariant';
import Terms from '../screens/Terms';

const RootStack = createStackNavigator();

function Sample() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sample</Text>
    </View>
  );
}

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={RootStackNavigatorRouts.Onboarding}
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={RootStackNavigatorRouts.Onboarding}
        component={OnboardingStackNavigator}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.TabNavigator}
        component={BottomTabNavigator}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Privacy}
        component={Privacy}
      />
      <RootStack.Screen name={RootStackNavigatorRouts.FAQ} component={Sample} />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Feedback}
        component={Feedback}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.SubscribeFirstVariant}
        component={SubscribeFirstVariant}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Gift}
        component={Sample}
      />
      <RootStack.Screen
        name={RootStackNavigatorRouts.Terms}
        component={Terms}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
