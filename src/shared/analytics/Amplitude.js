// @flow

// import { Amplitude } from 'amplitude-js';
const amplitude = require('amplitude-js');

const AmplitudeLogEvent = (event: string, props: Object) => {
    if (!__DEV__) {
        amplitude.getInstance().logEvent(event, props);
    }
};

const AmplitudeLogRevenue = (
    productId: String,
    price: Number,
    revenueType: String,
    props: Object,
) => {
    if (!__DEV__) {
        const revenue = amplitude
            .Revenue()
            .setProductId(productId)
            .setPrice(price)
            .setRevenueType(revenueType)
            .setEventProperties(props);
        amplitude.getInstance().logRevenueV2(revenue);
    }
};

export { AmplitudeLogEvent, AmplitudeLogRevenue };
