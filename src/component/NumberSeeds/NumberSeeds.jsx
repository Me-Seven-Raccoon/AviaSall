import React from 'react';
import { connect } from 'react-redux';

import { updateFilters } from '../../actions/actions';
import { filterSeeds } from '../../selector';

import classes from './NumberSeeds.module.scss';

const NumberSeeds = ({ checkedSeed, updateFiltersFunc }) => {
  console.log(checkedSeed);
  const checkedCount = Object.values(checkedSeed).reduce((acc, value) => (value ? acc + 1 : acc), 0);
  return (
    <form className={classes.containerSeeds}>
      <h3>КОЛИЧЕТСВО ПЕРЕСАДОК</h3>
      <fieldset className={classes['containerSeeds-seeds']}>
        <label className={classes['item-seeds']}>
          <input
            type={'checkbox'}
            className={classes['input-seeds']}
            id="transfer-var-all"
            onChange={(event) => updateFiltersFunc('all', event.target.checked)}
            checked={checkedCount === Object.keys(checkedSeed).length}
          />
          <span className={classes.checkBox}></span>Все
        </label>
      </fieldset>
      <fieldset className={classes['containerSeeds-seeds']}>
        <label className={classes['item-seeds']}>
          <input
            className={classes['input-seeds']}
            type={'checkbox'}
            id="transfer-var-without"
            onChange={() => updateFiltersFunc(0)}
            checked={checkedSeed[0]}
          />
          <span className={classes.checkBox}></span>Без пересадок
        </label>
      </fieldset>
      <fieldset className={classes['containerSeeds-seeds']}>
        <label className={classes['item-seeds']}>
          <input
            type={'checkbox'}
            className={classes['input-seeds']}
            id="transfer-var-one"
            onChange={() => updateFiltersFunc(1)}
            checked={checkedSeed[1]}
          />
          <span className={classes.checkBox}></span> 1 пересадка
        </label>
      </fieldset>
      <fieldset className={classes['containerSeeds-seeds']}>
        <label className={classes['item-seeds']}>
          <input
            type={'checkbox'}
            className={classes['input-seeds']}
            id="transfer-var-two"
            onChange={() => updateFiltersFunc(2)}
            checked={checkedSeed[2]}
          />
          <span className={classes.checkBox}></span> 2 пересадки
        </label>
      </fieldset>
      <fieldset className={classes['containerSeeds-seeds']}>
        <label className={classes['item-seeds']}>
          <input
            type={'checkbox'}
            className={classes['input-seeds']}
            id="transfer-var-three"
            onChange={() => updateFiltersFunc(3)}
            checked={checkedSeed[3]}
          />
          <span className={classes.checkBox}></span> 3 пересадки
        </label>
      </fieldset>
    </form>
  );
};

const mapStateToProps = (state) => ({
  checkedSeed: filterSeeds(state),
});

const mapDispatchToProps = {
  updateFiltersFunc: updateFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberSeeds);
