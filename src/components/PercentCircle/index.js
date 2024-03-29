/*
 * некоторые пропсы захардкожены
 * https://github.com/bartgryszko/react-native-circular-progress#configuration
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import CircularProgress from './CircularProgress';

const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress);

export default class PercentCircle extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fillAnimation: new Animated.Value(props.prefill),
        };
    }

    componentDidMount() {
        this.animate();
    }

    componentDidUpdate() {
        this.animate(0);
        setTimeout(() => this.animate(), 500);
    }

    reAnimate(prefill, toVal, dur, ease) {
        this.setState(
            {
                fillAnimation: new Animated.Value(prefill),
            },
            () => this.animate(toVal, dur, ease),
        );
    }

    animate(toVal, dur, ease) {
        const toValue = toVal >= 0 ? toVal : this.props.fill;
        const duration = dur || this.props.duration;
        const easing = ease || this.props.easing;

        const anim = Animated.timing(this.state.fillAnimation, {
            toValue,
            easing,
            duration,
        });
        anim.start(this.props.onAnimationComplete);

        return anim;
    }

    render() {
        const { fill, prefill, ...other } = this.props;

        return <AnimatedProgress {...other} fill={this.state.fillAnimation} />;
    }
}

PercentCircle.propTypes = {
    ...CircularProgress.propTypes,
    prefill: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func,
    onAnimationComplete: PropTypes.func,
};

PercentCircle.defaultProps = {
    duration: 500,
    easing: Easing.out(Easing.ease),
    prefill: 0,
};
