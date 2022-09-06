// @flow

import React from 'react';
import { WebView } from 'react-native-webview';

const Privacy = () => (
  <WebView
    originWhitelist={['*']}
    source={{ uri: 'https://match-up.me/Home/Privacy' }}
  />
);

export default React.memo<any>(Privacy);
