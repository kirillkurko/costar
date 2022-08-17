import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingStackNavigatorRouts} from '../utils/constants/navigationRouts';

const OnboardingStack = createStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name={OnboardingStackNavigatorRouts.WelcomeStep}
      />
      <OnboardingStack.Screen name={OnboardingStackNavigatorRouts.NameStep} />
      <OnboardingStack.Screen
        name={OnboardingStackNavigatorRouts.BirthdayStep}
      />
      <OnboardingStack.Screen
        name={OnboardingStackNavigatorRouts.ProgressStep}
      />
      <OnboardingStack.Screen
        name={OnboardingStackNavigatorRouts.QuestionsStep}
      />
    </OnboardingStack.Navigator>
  );
};
