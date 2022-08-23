// @flow

import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationScreenProps, withNavigation} from 'react-navigation';

import {logEvent} from 'src/shared/analytics/FB';
import Button from 'src/shared/components/Button';
import couple1 from 'assets/images/psychomatrix/post/couple1.png';
import couple2 from 'assets/images/psychomatrix/post/couple2.png';
import {resources} from '../../../shared';
import {AmplitudeLogEvent} from 'src/shared/analytics/Amplitude';
import styles from './styles';

type Props = {
  index: number,
  navigation: NavigationScreenProps,
};

class PromotingPost extends PureComponent<Props> {
  onPress = () => {
    const {index, navigation} = this.props;
    navigation.navigate('DoubleMatchup');
    logEvent(
      index === 0
        ? 'button_psychomatrix_try_now_tapped_1'
        : 'button_psychomatrix_try_now_tapped_2',
    );
    AmplitudeLogEvent('button_psychomatrix_try_now_tapped', {
      blockNum: `${index + 1}`,
    });
  };

  render() {
    const {index} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>
            {resources.t('POST.TRY_LOVE_COMPATIBILITY')}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              buttonText={resources.t('POST.TRY_NOW')}
              onPress={this.onPress}
              style={styles.button}
              withArrowIcon
            />
          </View>
        </View>
        <View>
          {index === 0 ? (
            <Image source={couple1} style={styles.icon} />
          ) : (
            <Image source={couple2} style={styles.icon} />
          )}
        </View>
      </View>
    );
  }
}

export default withNavigation(PromotingPost);
