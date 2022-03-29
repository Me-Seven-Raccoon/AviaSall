import React from 'react';
import { connect } from 'react-redux';

import { showTickets } from '../../actions/actions';

import classes from './ButtonTicket.module.scss';

const ButtonTicket = ({ showTickets }) => {
  return (
    <div className={classes.buttonAllTicketBlock}>
      <button className={classes.buttonAll} onClick={() => showTickets(5)}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  showTickets: showTickets,
};

export default connect(null, mapDispatchToProps)(ButtonTicket);
