import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { resources } from '../../../shared';
import Button from '@shared/components/Button';
import { img } from '@assets/img';
import { colors } from '@variables/colors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigatorRouts } from '../../../variables/navigationRoutes';

type Props = {
  title: string;
  titleIcon: any; // TODO: no any
  description: string;
  isActivePurchase: boolean;
  id: number;
  isFetching: boolean;
};

const PsychomatrixPost = ({
  title,
  titleIcon,
  description,
  isActivePurchase,
  id,
  isFetching,
}: Props) => {
  const navigation = useNavigation();

  // TODO: do we need eventItem?
  const onPress = (eventItem: string) => {
    navigation.navigate(RootStackNavigatorRouts.SubscribeFirstVariant);
  };

  return (
    <View style={styles.container}>
      {isActivePurchase || id === 0 ? (
        <>
          {title && (
            <View style={styles.titleContainer}>
              <Image
                source={titleIcon}
                resizeMode='contain'
                style={styles.titleIcon}
              />
              <Text style={styles.title}>{title}</Text>
              {isFetching && (
                <ActivityIndicator
                  style={styles.activityIndicator}
                  size='large'
                  color={colors.violet}
                />
              )}
            </View>
          )}
          <Text style={styles.description}>{description}</Text>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => onPress('card')}
          style={styles.wrapper}>
          <View>
            {title && (
              <View style={styles.titleContainer}>
                <Image
                  source={titleIcon}
                  resizeMode='contain'
                  style={styles.titleIcon}
                />
                <Text style={styles.title}>{title}</Text>
              </View>
            )}
            <View style={styles.buttonContainer}>
              <Button
                textStyle={styles.buttonText}
                buttonText={resources.t('PERSONALITY.UNLOCK')}
                onPress={() => onPress('button')}
                style={styles.button}
              />
            </View>
          </View>
          <Image
            source={img.main.lockIcon}
            resizeMode='contain'
            style={styles.lockIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PsychomatrixPost;
