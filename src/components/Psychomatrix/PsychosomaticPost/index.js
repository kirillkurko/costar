// @flow

import React, {PureComponent} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {logEvent} from 'src/shared/analytics/FB';
import {resources} from '../../../shared';
import Button from 'src/shared/components/Button';
import {img} from 'assets/img';
import {colors} from 'src/variables';
import {navigateToSubscriptionScreen} from 'src/shared/analytics/Firebase';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string,
  titleIcon: any,
  description: string,
  isActivePurchase: boolean,
  id: number,
  refresh(): Promise<void>,
  isFetching: boolean,
};

class PsychomatrixPost extends PureComponent<Props> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  navigation = useNavigation();
  onPress = (eventItem: string) => {
    const {refresh} = this.props;

    logEvent(`${eventItem}_personality_psychomatrix_unlock_tapped`);

    navigateToSubscriptionScreen(
      this.navigation,
      refresh,
      `${eventItem}_personality_unlock_tapped`,
    );
  };

  render() {
    const {title, description, isActivePurchase, isFetching, titleIcon, id} =
      this.props;
    return (
      <View style={styles.container}>
        {isActivePurchase || id === 0 ? (
          <>
            {title && (
              <View style={styles.titleContainer}>
                <Image
                  source={titleIcon}
                  resizeMode="contain"
                  style={styles.titleIcon}
                />
                <Text style={styles.title}>{title}</Text>
                {isFetching && (
                  <ActivityIndicator
                    style={styles.activityIndicator}
                    size="large"
                    color={colors.violet}
                  />
                )}
              </View>
            )}
            <Text style={styles.description}>{description}</Text>
          </>
        ) : (
          <TouchableOpacity
            onPress={() => this.onPress('card')}
            style={styles.wrapper}>
            <View>
              {title && (
                <View style={styles.titleContainer}>
                  <Image
                    source={titleIcon}
                    resizeMode="contain"
                    style={styles.titleIcon}
                  />
                  <Text style={styles.title}>{title}</Text>
                </View>
              )}
              <View style={styles.buttonContainer}>
                <Button
                  textStyle={styles.buttonText}
                  buttonText={resources.t('PERSONALITY.UNLOCK')}
                  onPress={() => this.onPress('button')}
                  style={styles.button}
                />
              </View>
            </View>
            <Image
              source={img.main.lockIcon}
              resizeMode="contain"
              style={styles.lockIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default PsychomatrixPost;
