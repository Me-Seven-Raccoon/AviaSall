import React from 'react';
import { connect } from 'react-redux';

import { updateSpeed } from '../../actions/actions';
import { speedCheckeds } from '../../selector';

import classes from './FilterPrice.module.scss';

const FilterPrice = ({ updateSpeed, state }) => {
  return (
    <div className={classes.containerFilter}>
      <button
        className={state === 'lite' ? `${classes.buttonFilter} ${classes.checked}` : `${classes.buttonFilter}`}
        onClick={() => updateSpeed('lite')}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={state === 'fast' ? `${classes.buttonFilter} ${classes.checked}` : `${classes.buttonFilter}`}
        onClick={() => updateSpeed('fast')}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={state === 'normal' ? `${classes.buttonFilter} ${classes.checked}` : `${classes.buttonFilter}`}
        onClick={() => updateSpeed('normal')}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: speedCheckeds(state),
  };
};

const mapDispatchToProps = {
  updateSpeed: updateSpeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);
