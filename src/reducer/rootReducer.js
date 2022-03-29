import { combineReducers } from 'redux';

import filtersProp from '../reducer/checked';
import speedCheckedsProp from '../reducer/speedChecked';
import getSearchIdProp from '../reducer/getSearchId';
import getSearchTicketProp from '../reducer/getSearchTicket';
import showTicketsProp from '../reducer/showTickets';
import searchStopProp from '../reducer/searchStop';

export default combineReducers({
  filtersProp,
  speedCheckedsProp,
  getSearchIdProp,
  getSearchTicketProp,
  showTicketsProp,
  searchStopProp,
});
