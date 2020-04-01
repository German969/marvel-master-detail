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
    fontSize: '40px'
  }
})(Header);