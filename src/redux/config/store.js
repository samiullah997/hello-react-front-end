import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../reducer';

const reducer = combineReducers({
  greetings: greetingReducer,
});

const store = configureStore({
  reducer,
});

export default store;
