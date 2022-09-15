import { track } from '@amplitude/analytics-react-native';
import appsFlyer from 'react-native-appsflyer';
import { useEffect } from 'react';

export const AMPLITUDE_API_KEY = 'a10a7306ef52d0440cf1059b6fea7c49';

export const useAnalytics = (eventName, eventProperties) => {
  useEffect(() => {
    if (eventName) {
      track(eventName, eventProperties);
    }
  }, [eventName, eventProperties]);

  return (name, properties) => track(name, properties);
};

export const logTargetEvent = (eventName, eventProperties) => {
  track(eventName, eventProperties);
  appsFlyer.logEvent(eventName, eventProperties);
};
