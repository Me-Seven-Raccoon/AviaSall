import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { Ticket } from '../Ticket';
import { ButtonTicket } from '../ButtonTicket';
import { getSearchId, getSearchTicket } from '../../actions/actions';
import { finalSort, getTickets, searchStop } from '../../selector';
import { NoFilter } from '../NoFilter';

import classes from './TicketList.module.scss';

const TicketList = ({ tickets, getSearchId, getSearchTicket, searchStops }) => {
  useEffect(() => {
    const didMount = async () => {
      await getSearchId();
      await getSearchTicket();
    };
    didMount();
  }, [getSearchId, getSearchTicket]);

  const getFullDuration = (segments) => {
    return segments.reduce((acc, item) => acc + item.duration, 0);
  };

  const getKey = (itemData) => {
    return `${itemData.price}-${itemData.carrier}-${Object.values(itemData.segments).length}-${getFullDuration(
      itemData.segments
    )}`;
  };

  const renderTicket = (item) => {
    return <Ticket key={getKey(item)} keyVal={getKey(item)} {...item} />;
  };

  const noFilter = tickets.length === 0 ? <NoFilter /> : null;
  const buttonTicket = !noFilter ? <ButtonTicket /> : null;
  const searchStop = !searchStops ? <div className={classes.searchTickets}>Поиск билетов</div> : null;

  return (
    <div>
      {noFilter}
      {searchStop}
      <Fragment>{tickets.map((item) => renderTicket(item))}</Fragment>
      {buttonTicket}
    </div>
  );
};

const mapStateToProps = (state) => ({
  test: getTickets(state),
  tickets: finalSort(state),
  searchStops: searchStop(state),
});

const mapDispatchToProps = {
  getSearchId: getSearchId,
  getSearchTicket: getSearchTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
