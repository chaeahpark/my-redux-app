import { SIGN_IN, SIGN_OUT, FETCH_POSTS } from '../types';
import { jsonplaceholder } from '../../apis/jsonplaceholder';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: FETCH_POSTS, payload: response.data });
};
