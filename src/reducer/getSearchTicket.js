import { GET_SEARCH_TICKET } from '../types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_TICKET:
      return [...state, ...action.payload.tickets];
    default:
      return state;
  }
};
