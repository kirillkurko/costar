// @flow

import { StyleSheet } from 'react-native';

import { colors, fonts } from 'src/variables';
import { wp } from 'src/helpers';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        width: wp('100%') - 32,
        fontFamily: fonts.sfProSemibold,
        fontSize: 24,
        lineHeight: 29,
        color: colors.white,
        textAlign: 'center',
        marginBottom: 16,
    },
    resultContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: colors.white,
        marginTop: 32,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    result: {
        fontFamily: fonts.sfProSemibold,
        fontSize: 56,
        lineHeight: 67,
        color: colors.violet,
    },
});

export default styles;
