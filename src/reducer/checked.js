import { UPDATE_SEEDS, UPDATE_SEEDS_ALL } from '../types';

const initialState = {
  checkedSeed: {
    0: true,
    1: true,
    2: true,
    3: true,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEEDS:
      return {
        checkedSeed: { ...state.checkedSeed, [action.payload]: !state.checkedSeed[action.payload] },
      };
    case UPDATE_SEEDS_ALL:
      return {
        checkedSeed: {
          0: action.payload,
          1: action.payload,
          2: action.payload,
          3: action.payload,
        },
      };
    default:
      return state;
  }
};
