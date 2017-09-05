import { combineReducers } from 'redux';
import userReducer from './user';
import profileReducer from './profile';
import organizationReducer from './organization'

export default combineReducers({ userReducer, profileReducer, organizationReducer });
