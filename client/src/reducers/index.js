import { combineReducers } from 'redux'
import app from './app';
import {userReducer} from '../users';

const rootReducer = combineReducers({
  app,
  users: userReducer
});

export default rootReducer;
