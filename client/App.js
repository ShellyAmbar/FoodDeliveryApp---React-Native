import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import RootNavigation from './src/navigation/Routes';
import {store, persistor} from './src/models/store';
import {Provider} from 'react-redux';
//import EStyleSheet from 'react-native-extended-stylesheet';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  // useEffect(() => {
  //   EStyleSheet.build();
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export {App};
