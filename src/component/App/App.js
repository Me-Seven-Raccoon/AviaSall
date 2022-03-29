import React from 'react';

import { Header } from '../Header';
import { FilterPrice } from '../FilterPrice';
import { NumberSeeds } from '../NumberSeeds';
import { TicketList } from '../TicketList';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.containerMenu}>
        <NumberSeeds />
        <div className={classes.containerMenuTicket}>
          <FilterPrice />
          <TicketList />
        </div>
      </div>
    </div>
  );
};

export default App;
