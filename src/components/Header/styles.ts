import { StyleSheet } from 'react-native';
import { wp } from '../../helpers';
import { colors, fonts } from '../../variables';

export const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontFamily: fonts.sfProSemibold,
    fontSize: 24,
    lineHeight: 29,
    color: colors.white,
  },
  touchableArea: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  questionIconContainer: {
    position: 'absolute',
    right: 16,
  },
  questionIcon: {
    width: 22,
    height: 22,
  },
  subtitle: {
    fontFamily: fonts.sfProRegular,
    fontSize: 16,
    lineHeight: 19,
    marginTop: 16,
    color: colors.gray,
  },
});
