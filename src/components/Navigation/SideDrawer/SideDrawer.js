import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
  const attachedClasses = [
    classes.SideDrawer,
    props.show ? classes.Open : classes.Close,
  ].join(' ');

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={attachedClasses} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
