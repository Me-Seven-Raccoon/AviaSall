import { createSelector } from 'reselect';

export const speedCheckeds = (state) => state.speedCheckedsProp;
export const getTickets = (state) => state.getSearchTicketProp;
export const getShowTickets = (state) => state.showTicketsProp;
export const filterSeeds = (state) => state.filtersProp.checkedSeed;
export const searchStop = (state) => state.searchStopProp;

export const sortedToEl = createSelector(getTickets, filterSeeds, speedCheckeds, (getSearchTicketProp, checkedSeed) => {
  let newArr = [];
  if (checkedSeed[0]) {
    newArr = [
      ...newArr,
      ...getSearchTicketProp.filter(({ segments }) => segments[0].stops.length === 0 && segments[1].stops.length === 0),
    ];
  }
  if (checkedSeed[1]) {
    newArr = [
      ...newArr,
      ...getSearchTicketProp.filter(({ segments }) => segments[0].stops.length === 1 && segments[1].stops.length === 1),
    ];
  }
  if (checkedSeed[2]) {
    newArr = [
      ...newArr,
      ...getSearchTicketProp.filter(({ segments }) => segments[0].stops.length === 2 && segments[1].stops.length === 2),
    ];
  }
  if (checkedSeed[3]) {
    newArr = [
      ...newArr,
      ...getSearchTicketProp.filter(({ segments }) => segments[0].stops.length === 3 && segments[1].stops.length === 3),
    ];
  }
  return newArr;
});

export const finalSort = createSelector(
  sortedToEl,
  speedCheckeds,
  getShowTickets,
  (getSearchTicketProp, speedCheckedsProp, showTicketsPro) => {
    if (speedCheckedsProp === 'lite') {
      return getSearchTicketProp.sort((a, b) => a.price - b.price).slice(0, showTicketsPro);
    }
    if (speedCheckedsProp === 'fast') {
      return getSearchTicketProp
        .sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )
        .slice(0, showTicketsPro);
    }
    if (speedCheckedsProp === 'normal') {
      return getSearchTicketProp
        .sort((a, b) => a.price + b.price - (a.segments[0].duration + b.segments[1].duration))
        .slice(0, showTicketsPro);
    }
  }
);
