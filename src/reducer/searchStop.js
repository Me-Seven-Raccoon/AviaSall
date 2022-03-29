import { GET_SEARCH_STOP } from '../types';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_STOP:
      return true;
    default:
      return state;
  }
};
