// @flow

import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import { fromBottom } from 'react-navigation-transitions';

import {
    Feedback,
    WelcomeStep,
    NameStep,
    BirthdayStep,
    QuestionsStep,
    ProgressStep,
    SingleMatchup,
    DailyMatchup,
    DoubleMatchup,
    SubscribeFirstVariant,
    SubscribeSecondVariant,
    Subscribe2,
    Subscribe3,
    Subscribe4,
    Subscribe5,
    Privacy,
    Router,
    Terms,
    FAQ,
    Gift,
} from 'src/screens';
import { logEvent } from 'src/shared/analytics/FB';
import { img } from 'assets/img';
import { fonts, colors } from 'src/variables';
import I18n from 'src/shared/i18n/configuration';
import { AmplitudeLogEvent } from './analytics/Amplitude';

const TabNavigator = createBottomTabNavigator(
    {
        SingleMatchup: {
            screen: SingleMatchup,
            path: 'personality',
            navigationOptions: {
                tabBarIcon: ({ focused }: { focused: boolean }) => (
                    <Image
                        resizeMode="contain"
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
                                color: focused
                                    ? colors.cornflowerBlue
                                    : colors.white,
                            },
                        ]}
                    >
                        {I18n.t('TAB_BAR.PERSONALITY')}
                    </Text>
                ),
                title: '',
                tabBarOnPress: ({ defaultHandler }) => {
                    defaultHandler();
                    logEvent('button_tabbar_personality_tapped');
                    AmplitudeLogEvent('button_tabbar_personality_tapped');
                },
            },
        },
        DailyMatchup: {
            screen: DailyMatchup,
            path: 'daily',
            navigationOptions: {
                tabBarIcon: ({ focused }: { focused: boolean }) => (
                    <Image
                        resizeMode="contain"
                        source={
                            focused
                                ? img.main.dailyActiveIcon
                                : img.main.dailyInactiveIcon
                        }
                        style={styles.icon}
                    />
                ),
                tabBarLabel: ({ focused }: { focused: boolean }) => (
                    <Text
                        style={[
                            styles.tabBarLabel,
                            {
                                color: focused
                                    ? colors.cornflowerBlue
                                    : colors.white,
                            },
                        ]}
                    >
                        {I18n.t('TAB_BAR.DAILY')}
                    </Text>
                ),
                title: '',
                tabBarOnPress: ({ defaultHandler }) => {
                    defaultHandler();
                    logEvent('button_tabbar_daily_tapped');
                    AmplitudeLogEvent('button_tabbar_daily_tapped');
                },
            },
        },
        DoubleMatchup: {
            screen: DoubleMatchup,
            path: 'compatibility',
            navigationOptions: {
                tabBarIcon: ({ focused }: { focused: boolean }) => (
                    <Image
                        resizeMode="contain"
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
                                color: focused
                                    ? colors.cornflowerBlue
                                    : colors.white,
                            },
                        ]}
                    >
                        {I18n.t('TAB_BAR.COMPATIBILITY')}
                    </Text>
                ),
                title: '',
                tabBarOnPress: ({ defaultHandler }) => {
                    defaultHandler();
                    logEvent('button_tabbar_compatibility_tapped');
                    AmplitudeLogEvent('button_tabbar_compatibility_tapped');
                },
            },
        },
    },
    {
        initialRouteName: 'DailyMatchup',
        tabBarOptions: {
            activeTintColor: 'transparent',
            style: {
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
                height: 64,
            },
        },
    },
);

TabNavigator.navigationOptions = {
    header: null,
};

const StackWithOnboarding = createStackNavigator(
    {
        WelcomeStep,
        NameStep,
        BirthdayStep,
        QuestionsStep,
        ProgressStep,
    },
    {
        defaultNavigationOptions: { header: null },
    },
);

const StackWithoutOnboarding = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigator,
            path: '',
            navigationOptions: {
                gesturesEnabled: false,
            },
        },
        SubscribeFirstVariant,
        Privacy,
        Terms,
        Feedback,
        FAQ,
        Gift,
        SubscribeSecondVariant: {
            screen: SubscribeSecondVariant,
            path: '',
            transitionConfig: () => fromBottom(),
        },
        Subscribe2: {
            screen: Subscribe2,
            path: '',
            transitionConfig: () => fromBottom(),
        },
        Subscribe3: {
            screen: Subscribe3,
            path: '',
            transitionConfig: () => fromBottom(),
        },
        Subscribe4: {
            screen: Subscribe4,
            path: '',
            transitionConfig: () => fromBottom(),
        },
        Subscribe5: {
            screen: Subscribe5,
            path: '',
            transitionConfig: () => fromBottom(),
        },
    },
    { transitionConfig: () => fromBottom() },
);

export default createAppContainer(
    createSwitchNavigator(
        {
            Home: {
                screen: StackWithoutOnboarding,
                path: '',
            },
            StackWithOnboarding: { screen: StackWithOnboarding, path: '' },
            RouterScreen: { screen: Router, path: '' },
        },
        {
            initialRouteName: 'RouterScreen',
        },
    ),
);

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
