import {createStore, applyMiddleware} from 'redux';

import {reducer} from './root-reducer';

import thunk from 'redux-thunk';

//import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
//const sagaMiddleware = createSagaMiddleware();

let store = createStore(persistedReducer, applyMiddleware(thunk));
//sagaMiddleware.run(rootSagas);
let persistor = persistStore(store);
export {store, persistor};
