import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorRouts } from '../variables/navigationRouts';
import DailyMatchup from '../screens/DailyMatchup';
import SingleMatchup from '../screens/SingleMatchup';
import DoubleMatchup from '../screens/DoubleMatchup';
import { colors, fonts } from '../variables';
import { Image, StyleSheet, Text } from 'react-native';
import { img } from '../../assets/img';
import { resources } from '../shared';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={BottomTabNavigatorRouts.Daily}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'transparent',
        tabBarStyle: {
          backgroundColor: colors.lighterViolet,
          borderTopColor: 'transparent',
          shadowColor: '#291967',
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 10,
        },
      }}>
      <Tab.Screen
        name={BottomTabNavigatorRouts.Personality}
        component={SingleMatchup}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Image
              resizeMode='contain'
              source={
                focused
                  ? img.main.personalityActiveIcon
                  : img.main.personalityInactiveIcon
              }
              style={styles.icon}
            />
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: focused ? colors.cornflowerBlue : colors.white,
                },
              ]}>
              {resources.t('TAB_BAR.PERSONALITY')}
            </Text>
          ),
          title: '',
          tabBarOnPress: ({ defaultHandler }) => {
            defaultHandler();
          },
        }}
      />
      <Tab.Screen
        name={BottomTabNavigatorRouts.Daily}
        component={DailyMatchup}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Image
              resizeMode='contain'
              source={
                focused ? img.main.dailyActiveIcon : img.main.dailyInactiveIcon
              }
              style={styles.icon}
            />
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: focused ? colors.cornflowerBlue : colors.white,
                },
              ]}>
              {resources.t('TAB_BAR.DAILY')}
            </Text>
          ),
          title: '',
          tabBarOnPress: ({ defaultHandler }) => {
            defaultHandler();
          },
        }}
      />
      <Tab.Screen
        name={BottomTabNavigatorRouts.Compatibility}
        component={DoubleMatchup}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Image
              resizeMode='contain'
              source={
                focused
                  ? img.main.compatibilityActiveIcon
                  : img.main.compatibilityInactiveIcon
              }
              style={styles.icon}
            />
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text
              style={[
                styles.tabBarLabel,
                {
                  color: focused ? colors.cornflowerBlue : colors.white,
                },
              ]}>
              {resources.t('TAB_BAR.COMPATIBILITY')}
            </Text>
          ),
          title: '',
          tabBarOnPress: ({ defaultHandler }) => {
            defaultHandler();
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  tabBarLabel: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: fonts.sfProLight,
    marginBottom: 10,
  },
});

export default BottomTabNavigator;
