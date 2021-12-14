/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';

const reducer = combineReducers({
  missions: missionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
