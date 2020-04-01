import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

function HeroRowSkeleton({ classes }) {
  return (
    <div className={classes.heroRowSkeleton}>
      <Skeleton variant="circle" className={classes.avatarSkeleton} animation="wave" />
      <Skeleton variant="text" className={classes.nameSkeleton} animation="wave" />
      <Skeleton variant="rect" className={classes.flagsSkeleton} animation="wave" />
    </div>
  );
}

export default withStyles({
  heroRowSkeleton: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid rgba(224, 224, 224, 1)'
  },
  avatarSkeleton: {
    display: 'inline-block',
    width: '40px',
    height: '40px',
    margin: '10px'
  },
  nameSkeleton: {
    display: 'inline-block',
    width: '130px',
    height: '20px',
    margin: 'auto 10px'
  },
  flagsSkeleton: {
    display: 'inline-block',
    width: '180px',
    height: '24px',
    marginLeft: '20px'
  }
})(HeroRowSkeleton);