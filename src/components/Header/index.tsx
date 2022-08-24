import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { resources } from '../../shared';
import SingleDatePicker from '../../components/DatePickers/SingleDatePicker';
import DoubleDatePicker from '../../components/DatePickers/DoubleDatePicker';
import { img } from '../../../assets/img';
import { styles } from './styles';

type Props = {
  onQuestionPress?: () => void;
  userBirthDateParts: string[];
  onDateChange?: (date: string) => void;
  title: string;
  typeDatePicker?: string;
  firstDateParts?: string[];
  secondDateParts?: string[];
  onFirstDateChange?: () => void;
  onSecondDateChange?: () => void;
  isWomanRipple?: boolean;
  isManRipple?: boolean;
};

const Header = ({
  onQuestionPress,
  userBirthDateParts,
  onDateChange,
  title,
  typeDatePicker,
  firstDateParts,
  secondDateParts,
  onFirstDateChange,
  onSecondDateChange,
  isWomanRipple,
  isManRipple,
}: Props) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    {resources.t('PREFERENCES.REQUEST_LANGUAGE') === 'en' && (
      <TouchableOpacity
        hitSlop={styles.touchableArea}
        onPress={onQuestionPress}
        style={styles.questionIconContainer}>
        <Image source={img.feedback.question} style={styles.questionIcon} />
      </TouchableOpacity>
    )}
    <Text style={styles.subtitle}>
      {resources.t('PERSONALITY.SCREEN_SUBTITLE')}
    </Text>
    {typeDatePicker === 'single' ? (
      <SingleDatePicker
        userBirthDateParts={userBirthDateParts}
        onDateChange={onDateChange}
      />
    ) : (
      <DoubleDatePicker
        firstDateParts={firstDateParts}
        secondDateParts={secondDateParts}
        onFirstDateChange={onFirstDateChange}
        onSecondDateChange={onSecondDateChange}
        isWomanRipple={isWomanRipple}
        isManRipple={isManRipple}
      />
    )}
  </View>
);

export default React.memo<Props>(Header);
