import React from 'react';
import { withStyles } from '@material-ui/core/styles';

function Header(props) {
  const { classes } = props;

  return (
    <h1 className={classes.headerTitle}>Marvel Super Heroes</h1>
  );
}

export default withStyles({
  headerTitle: {
    backgroundColor: 'black',
    color: 'red',
    margin: '0px',
    textAlign: 'center',
    height: '100px',
    lineHeight: '100px',
    fontSize: '40px',
    background: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(85,85,85,1) 100%)'
  }
})(Header);