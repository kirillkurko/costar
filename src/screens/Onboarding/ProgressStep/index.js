// @flow

import React, { PureComponent } from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

import { img } from 'assets/img';
import CircularProgress from 'src/components/PercentCircle/OnboardingCircularProgress';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackNavigatorRouts } from '../../../variables/navigationRouts';

class ProgressStep extends PureComponent {
  seenOnboarding = async () => {
    try {
      await AsyncStorage.setItem('isSeenOnboarding', JSON.stringify(true));
    } catch (error) {
      console.warn(error);
    }
  };

  navigateToSubscribeScreenWithoutOnboarding = async () => {
    const { navigation } = this.context;
    this.seenOnboarding();

    navigation.navigate(RootStackNavigatorRouts.SubscribeFirstVariant);
  };

  render() {
    return (
      <SafeAreaConsumer>
        {(insets) => (
          <ImageBackground
            source={img.onboarding.firstBg}
            style={[
              styles.container,
              {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
              },
            ]}>
            <CircularProgress
              navigateToNextScreen={
                this.navigateToSubscribeScreenWithoutOnboarding
              }
            />
            {/* <BigButton
                            style={styles.buttonWrapper}
                            onPress={this.navigateToSubscribeScreenWithoutOnboarding}
                            buttonText={I18n.t('ONBOARDING.BUTTONS.START')}
                        /> */}
          </ImageBackground>
        )}
      </SafeAreaConsumer>
    );
  }
}

export default connect()(ProgressStep);
