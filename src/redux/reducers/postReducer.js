import { FETCH_POSTS, ADD_POST } from '../types';
import shortid from 'shortid';

const initialState = [
  {
    id: shortid.generate(),
    userId: '105600790952176440765',
    title: 'Why people love food',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tempus nisl. Aliquam vitae ipsum felis. Aliquam dictum eu lectus eget lobortis. Praesent nec tincidunt ligula, quis commodo nibh. Morbi eu nibh quis turpis fringilla pharetra. Fusce non nisi a urna semper feugiat. Nullam pellentesque laoreet massa quis tristique. Integer porttitor id nibh vel posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
  },
  {
    id: shortid.generate(),
    userId: null,
    title: 'How to deal with stress',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tempus nisl. Aliquam vitae ipsum felis. Aliquam dictum eu lectus eget lobortis. Praesent nec tincidunt ligula, quis commodo nibh. Morbi eu nibh quis turpis fringilla pharetra. Fusce non nisi a urna semper feugiat. Nullam pellentesque laoreet massa quis tristique. Integer porttitor id nibh vel posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
  },
  {
    id: shortid.generate(),
    userId: null,
    title: 'Cats loves coffee',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tempus nisl. Aliquam vitae ipsum felis. Aliquam dictum eu lectus eget lobortis. Praesent nec tincidunt ligula, quis commodo nibh. Morbi eu nibh quis turpis fringilla pharetra. Fusce non nisi a urna semper feugiat. Nullam pellentesque laoreet massa quis tristique. Integer porttitor id nibh vel posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
  },
  {
    id: shortid.generate(),
    userId: '105600790952176440765',
    title: 'Bears in the secretive forest',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tempus nisl. Aliquam vitae ipsum felis. Aliquam dictum eu lectus eget lobortis. Praesent nec tincidunt ligula, quis commodo nibh. Morbi eu nibh quis turpis fringilla pharetra. Fusce non nisi a urna semper feugiat. Nullam pellentesque laoreet massa quis tristique. Integer porttitor id nibh vel posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
  }
];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state];
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postReducer;
