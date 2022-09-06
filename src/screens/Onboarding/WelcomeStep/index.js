// @flow

import React, { useEffect, useCallback } from 'react';
import {
    Animated,
    AsyncStorage,
    ImageBackground,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { useSafeArea } from 'react-native-safe-area-context';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import * as actions from 'src/store/actions';
import { logEvent } from 'src/shared/analytics/FB';
import I18n from 'src/shared/i18n/configuration';
import { Animate } from 'src/helpers/Animations';
import { img } from 'assets/img';
import purchasesInteractions from 'src/shared/purchases/interactions';
import type { PurchasesPackageType } from 'src/shared/purchases/types';
import BigButton from 'src/shared/components/BigButton';
import { AmplitudeLogEvent } from 'src/shared/analytics/Amplitude';
import styles from './styles';

type Props = {
    setAvailablePurchases(Array<PurchasesPackageType>): void,
    navigation: NavigationScreenProp<NavigationState>,
};

const WelcomeStep = ({ setAvailablePurchases, navigation }: Props) => {
    const insets = useSafeArea();

    useEffect(() => {
        setPurchaseStatus();
        setPurchases();
        componentDidMount();
    }, []);

    const componentDidMount = useCallback(async () => {
        logEvent('screen_welcome_appeared');
        AmplitudeLogEvent('screen_welcome_appeared');
    }, []);

    const setPurchaseStatus = useCallback(async () => {
        await AsyncStorage.setItem('isActivePurchase', JSON.stringify(false));
    }, []);

    const setPurchases = useCallback(async () => {
        const { current } = await purchasesInteractions.getOfferings();

        if (current && current.availablePackages) {
            setAvailablePurchases(current.availablePackages);
        }
    }, []);

    const onStartPress = useCallback(() => {
        navigation.navigate('NameStep');
    }, []);

    return (
        <ImageBackground
            source={img.onboarding.firstBg}
            style={[
                styles.container,
                { paddingTop: insets.top, paddingBottom: insets.bottom },
            ]}
        >
            <View style={styles.wrapper}>
                <View>
                    <Animated.Image
                        style={{
                            ...styles.circle,
                            opacity: Animate({ duration: 600, delay: 100 }),
                        }}
                        source={img.onboarding.circleTopShadow}
                        showWebviewLoader={false}
                        resizeMode="contain"
                    />
                    <Animated.Image
                        style={{
                            ...styles.man,
                            opacity: Animate({ duration: 700, delay: 350 }),
                        }}
                        source={img.onboarding.firstScreenMan}
                        showWebviewLoader={false}
                        resizeMode="contain"
                    />
                    <Animated.Image
                        style={{
                            ...styles.seven,
                            opacity: Animate({ duration: 700, delay: 600 }),
                        }}
                        source={img.onboarding.seven}
                        showWebviewLoader={false}
                        resizeMode="contain"
                    />
                    <Animated.Image
                        style={{
                            ...styles.energy,
                            opacity: Animate({ duration: 700, delay: 400 }),
                        }}
                        source={img.onboarding.firstScreenEnergy}
                        showWebviewLoader={false}
                        resizeMode="contain"
                    />
                    <Animated.Image
                        style={{
                            ...styles.five,
                            opacity: Animate({ duration: 700, delay: 700 }),
                        }}
                        source={img.onboarding.five}
                        showWebviewLoader={false}
                        resizeMode="contain"
                    />
                    <Animated.Image
                        style={{
                            ...styles.head,
                            opacity: Animate({ duration: 700, delay: 800 }),
                        }}
                        source={img.onboarding.firstScreenHead}
                        showWebviewLoader={false}
                        resizeMode="contain"
                    />
                    <Animated.Image
                        style={{
                            ...styles.shadow,
                            opacity: Animate({ duration: 700, delay: 300 }),
                        }}
                        source={img.onboarding.shadow}
                        showWebviewLoader={false}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.titleText}>
                    {I18n.t('ONBOARDING.WELCOME.TITLE')}
                </Text>
                <Text style={styles.descriptionText}>
                    {I18n.t('ONBOARDING.WELCOME.DESCRIPTION')}
                </Text>
                <BigButton
                    style={styles.buttonWrapper}
                    onPress={onStartPress}
                    buttonText={I18n.t('ONBOARDING.BUTTONS.START')}
                />
            </View>
        </ImageBackground>
    );
};

const mapDispatchToProps = dispatch => ({
    setAvailablePurchases: availablePurchases =>
        dispatch(actions.setAvailablePurchases(availablePurchases)),
});

export default connect(
    null,
    mapDispatchToProps,
)(React.memo<Props>(WelcomeStep));
