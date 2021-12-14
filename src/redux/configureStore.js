/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';
import rocketReducer from './rocket/rocket';// eslint-disable-line

const reducer = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
