import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackNavigatorRouts } from '../variables/navigationRouts';
import NameStep from '../screens/Onboarding/NameStep';
import BirthdayStep from '../screens/Onboarding/BirthdayStep';

const OnboardingStack = createStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name={OnboardingStackNavigatorRouts.WelcomeStep}
      />
      <OnboardingStack.Screen
        name={OnboardingStackNavigatorRouts.NameStep}
        component={NameStep}
      />
      <OnboardingStack.Screen
        name={OnboardingStackNavigatorRouts.BirthdayStep}
        component={BirthdayStep}
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
