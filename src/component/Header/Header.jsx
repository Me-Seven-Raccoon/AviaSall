import React from 'react';

import Logo from '../../image/Logo.svg';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.containerLogo}>
      <img src={Logo} />
    </div>
  );
};

export default Header;
