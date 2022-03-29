import { SHOW_TICKETS } from '../types';

const initialState = 5;

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TICKETS:
      return state + action.payload;
    default:
      return state;
  }
};
