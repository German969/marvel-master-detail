import React from 'react';
import { withStyles } from '@material-ui/core/styles';

function HeroDetail(props) {
  const { classes } = props;

  return (
    <div className={classes.heroDetail}>Hero Detail</div>
  );
}

export default withStyles({
  heroDetail: {flexGrow: 10}
})(HeroDetail);