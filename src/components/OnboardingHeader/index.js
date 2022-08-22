// @flow

import React, { useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {
    withNavigation,
    NavigationState,
    NavigationScreenProp,
} from 'react-navigation';

import I18n from 'src/shared/i18n/configuration';
import { wp } from 'src/helpers';
import { colors, fonts } from 'src/variables';
import { img } from '../../../assets/img';

type Props = {
    number: number,
    navigation: NavigationScreenProp<NavigationState>,
};

const OnboardingHeader = ({ navigation, number }: Props) => {
    const onBackPress = useCallback(() => {
        navigation.pop();
    });
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={onBackPress}
            >
                <Image source={img.onboarding.backArrow} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>
                {`${I18n.t('ONBOARDING.STEP')} ${number} ${I18n.t(
                    'ONBOARDING.OF',
                )} 5`}
            </Text>
        </View>
    );
};

export default withNavigation(OnboardingHeader);

const styles = StyleSheet.create({
    header: {
        height: 56,
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    title: {
        fontFamily: fonts.sfProMedium,
        fontSize: 16,
        lineHeight: 19,
        color: colors.white,
    },
    iconContainer: {
        position: 'absolute',
        left: 0,
        height: 56,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});
