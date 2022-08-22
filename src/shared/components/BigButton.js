// @flow

import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import {
    ViewStyleProp,
    TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';
import LinearGradient from 'react-native-linear-gradient';
import { img } from 'assets/img';
import { colors, fonts } from 'src/variables';

type Props = {
    onPress(): void,
    buttonText: string,
    style?: ViewStyleProp,
    textStyle?: TextStyleProp,
    withArrowIcon?: boolean,
};
const BigButton = ({
    onPress,
    buttonText,
    textStyle,
    style,
    withArrowIcon = false,
}: Props) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.wrapper, style]}>
            <LinearGradient
                colors={colors.yellowGradient}
                style={[
                    styles.container,
                    // eslint-disable-next-line react-native/no-inline-styles
                    { paddingLeft: withArrowIcon ? 26 : 0 },
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
                {withArrowIcon && (
                    <Image
                        source={img.onboarding.iconArrow}
                        style={styles.arrowIcon}
                    />
                )}
            </LinearGradient>
        </View>
    </TouchableOpacity>
);

export default React.memo<Props>(BigButton);

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: colors.shadowYellow,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    container: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        flexDirection: 'row',
    },
    buttonText: {
        color: colors.white,
        fontFamily: fonts.sfProMedium,
        fontSize: 17,
        textAlign: 'center',
    },
    arrowIcon: {
        marginLeft: 10,
        width: 16,
        resizeMode: 'contain',
    },
});
