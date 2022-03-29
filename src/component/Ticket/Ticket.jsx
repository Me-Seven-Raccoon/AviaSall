import React from 'react';

import { timeRelokate, getTimeFromMins } from '../../function';

import classes from './Ticket.module.scss';

const Ticket = ({ price, carrier, segments, keyVal }) => {
  const renderDataFlay = ({ origin, destination, duration, stops, date }, index) => (
    <div key={`${keyVal}-${index}`} className={classes.ticketOn}>
      <ul className={classes.route}>
        <li className={classes.styleHed}>{`${origin} - ${destination}`}</li>
        <li className={classes.styleBot}>{timeRelokate(date, duration)}</li>
      </ul>
      <ul className={classes.length}>
        <li className={classes.styleHed}>В ПУТИ</li>
        <li className={classes.styleBot}>{getTimeFromMins(duration)}</li>
      </ul>
      <ul className={classes.stop}>
        <li className={classes.styleHed}>{`${stops.length} ПЕРЕСАДКИ`}</li>
        <li className={classes.styleBot}>{stops.join(', ')}</li>
      </ul>
    </div>
  );

  return (
    <div className={classes.containerTicket}>
      <div className={classes.ticketHeader}>
        <p className={classes.price}>{price} &#8381;</p>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} />
      </div>
      {segments.map((items, index) => renderDataFlay(items, index))}
    </div>
  );
};
export default Ticket;
