import {
  UPDATE_SEEDS,
  UPDATE_SEEDS_ALL,
  UPDATE_SPEED,
  GET_SEARCH_ID,
  GET_SEARCH_TICKET,
  GET_SEARCH_STOP,
  SHOW_TICKETS,
  ERR,
} from '../types';

export const updateSpeed = (speed) => {
  return {
    type: UPDATE_SPEED,
    payload: speed,
  };
};

export const showTickets = (number) => {
  return {
    type: SHOW_TICKETS,
    payload: number,
  };
};

export const updateFilters = (key, isChecked) => {
  if (key === 'all') {
    return {
      type: UPDATE_SEEDS_ALL,
      payload: isChecked,
    };
  } else {
    return {
      type: UPDATE_SEEDS,
      payload: key,
    };
  }
};

export const getSearchId = () => async (dispatch) => {
  try {
    const res = await fetch('https://front-test.beta.aviasales.ru/search');
    if (res.ok) {
      const data = await res.json();
      dispatch({
        type: GET_SEARCH_ID,
        payload: data.searchId,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_ID,
      error: true,
      payload: err,
    });
  }
};

export const getSearchTicket = () => async (dispatch, getState) => {
  const { getSearchIdProp } = getState();
  try {
    const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${getSearchIdProp}`);
    if (res.ok) {
      const data = await res.json();
      dispatch({
        type: GET_SEARCH_TICKET,
        payload: data,
      });
      if (data.stop) {
        dispatch({
          type: GET_SEARCH_STOP,
          payload: data.stop,
        });
        return;
      }
      setTimeout(async () => {
        await dispatch(getSearchTicket());
      }, 100);
    } else if (res.status === 500) {
      dispatch({
        type: ERR,
        payload: ERR,
      });
      setTimeout(async () => {
        await dispatch(getSearchTicket());
      }, 100);
    }
  } catch (err) {
    dispatch({
      type: ERR,
      payload: err,
    });
  }
};
