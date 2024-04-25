import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {SafeArea, StatusBar} from '@components';
import {persistor, store} from '@state/store';
import {ThemeProvider} from '@styles';

import {AppStack} from './stacks/app';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <AppInner />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const AppInner = () => (
  <SafeArea>
    <StatusBar showHideTransition="slide" animated />

    <AppStack />
  </SafeArea>
);

export {App};
