// @flow

import { StyleSheet } from 'react-native';

import { colors, fonts } from 'src/variables';

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        alignItems: 'center',
    },
    title: {
        fontFamily: fonts.sfProSemibold,
        fontSize: 24,
        lineHeight: 29,
        color: colors.white,
    },
    resultContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: colors.white,
        marginTop: 24,
        marginBottom: 27,
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
