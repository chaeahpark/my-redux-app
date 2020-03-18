import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';

const allReducers = combineReducers({ auth: authReducer, posts: postReducer });

export default allReducers;
