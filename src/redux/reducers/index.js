import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  auth: authReducer,
  posts: postReducer,
  form: formReducer
});

export default allReducers;
