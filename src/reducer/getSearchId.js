import { GET_SEARCH_ID } from '../types';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return action.payload;
    default:
      return state;
  }
};
