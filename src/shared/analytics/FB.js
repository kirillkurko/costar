// @flow

import { AppEventsLogger } from 'react-native-fbsdk';

const logEvent = (event: string) => {
    if (!__DEV__) {
        AppEventsLogger.logEvent(event);
    }
};

export { logEvent };
