import { UPDATE_SPEED } from '../types';

const initialState = 'lite';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SPEED:
      return action.payload;
    default:
      return state;
  }
};
