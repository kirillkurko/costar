import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from 'src/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import RootStackNavigator from './src/navigation/RootStackNavigator';

const persistor = persistStore(store);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
