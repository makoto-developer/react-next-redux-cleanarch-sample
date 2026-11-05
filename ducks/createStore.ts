import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice, { initialState as counterState } from './counter/slice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

const preloadedState = () => {
  return { counter: counterState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Toolkit 2 dropped the standalone getDefaultMiddleware export
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export default createStore;
