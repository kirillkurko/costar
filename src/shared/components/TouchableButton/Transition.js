// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

type Props = {
    borderColor: string,
    backgroundColor: string,
    size: number,
    interval: number,
};

class Transition extends PureComponent<Props> {
    anim = new Animated.Value(0);

    componentDidMount() {
        const { interval } = this.props;
        Animated.timing(this.anim, {
            toValue: 1,
            duration: interval,
            easing: Easing.linear,
        }).start();
    }

    render() {
        const { borderColor, backgroundColor, size } = this.props;
        return (
            <View style={styles.wrapper}>
                <Animated.View
                    style={[
                        styles.border,
                        {
                            borderColor,
                            backgroundColor,
                            width: this.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [180, size],
                            }),
                            height: this.anim.interpolate({
                                inputRange: [0, 5],
                                outputRange: [30, size / 2],
                            }),
                            borderRadius: size / 2,
                            opacity: this.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [2, 0],
                            }),
                        },
                    ]}
                />
            </View>
        );
    }
}
export default Transition;
const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 6,
        bottom: 0,
        alignItems: 'center',
    },
    border: {
        borderWidth: StyleSheet.hairlineWidth * 2,
    },
});
