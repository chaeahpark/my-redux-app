import { FETCH_POSTS } from '../types';

const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
