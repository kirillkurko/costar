// @flow

import React, {PureComponent} from 'react';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationScreenProps, withNavigation} from 'react-navigation';

import {colors, fonts} from 'src/variables';
import {img} from 'assets/img';
import {resources} from '../../shared';
import {AmplitudeLogEvent} from 'src/shared/analytics/Amplitude';
import {navigateToSubscriptionScreen} from 'src/shared/analytics/Firebase';

type State = {
  isVisible: boolean,
};

type Props = {
  navigation: NavigationScreenProps,
  refresh(): Promise<void>,
  eventSource: string,
};

class SubscriptionCircleButton extends PureComponent<Props, State> {
  state = {
    isVisible: true,
  };

  onPress = () => {
    AmplitudeLogEvent('button_diamond_round_tapped');
    const {navigation, refresh, eventSource} = this.props;

    // navigation.navigate('Subscribe3', {
    //     onGoBack: () => refresh(),
    // });

    navigateToSubscriptionScreen(navigation, refresh, 'diamond_round');
  };

  onCloseCircleButton = () => {
    this.setState({isVisible: false});
    AsyncStorage.setItem('purchaseButtonVisibility', JSON.stringify(false));
  };

  render() {
    const {isVisible} = this.state;
    return isVisible ? (
      <TouchableOpacity
        style={styles.subscriptionCircleButton}
        onPress={this.onPress}>
        <TouchableOpacity
          style={styles.subscriptionCircleCloseContainer}
          onPress={this.onCloseCircleButton}>
          <Image
            source={img.iconClose}
            style={styles.subscriptionCircleClose}
          />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          source={img.iconDiamond}
          style={styles.subscriptionCircleImage}
        />
        <Text style={styles.subscriptionCircleText}>
          {resources.t('SUBSCRIPTION.TRY_FREE')}
        </Text>
      </TouchableOpacity>
    ) : null;
  }
}

export default withNavigation(SubscriptionCircleButton);

const styles = StyleSheet.create({
  subscriptionCircleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 80,
    borderRadius: 50,
    right: 15,
    zIndex: 3,
    height: 80,
    width: 80,
    shadowColor: colors.shadowGold,
    backgroundColor: colors.gold,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  subscriptionCircleImage: {
    width: 40,
    height: 40,
  },
  subscriptionCircleCloseContainer: {
    backgroundColor: colors.violet,
    borderRadius: 10,
    width: 20,
    height: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
    right: 2,
  },
  subscriptionCircleClose: {
    width: 10,
    height: 10,
  },
  subscriptionCircleText: {
    fontFamily: fonts.sfProMedium,
    fontSize: 12,
    lineHeight: 14,
    color: colors.white,
    marginTop: 3,
  },
});
