// @flow

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function fs(percent: number) {
    const widthPercent = (percent * width) / 100;

    return Math.round(widthPercent);
}

export { fs };
