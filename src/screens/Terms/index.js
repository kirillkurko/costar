// @flow

import React from 'react';
import { WebView } from 'react-native-webview';

const Terms = () => (
  <WebView
    originWhitelist={['*']}
    source={{ uri: 'https://match-up.me/Home/TermsOfService' }}
  />
);

export default React.memo<any>(Terms);
