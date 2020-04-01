import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

function HeroDetailSkeleton({ classes }) {
  return (
    <div className={classes.heroDetailSkeleton}>
      <Skeleton variant="circle" className={classes.avatarSkeleton} animation="wave" />
      <Skeleton variant="text" className={classes.nameSkeleton} animation="wave" />
      <Skeleton variant="text" className={classes.descriptionSkeleton} animation="wave" />
    </div>
  )
}

export default withStyles({
  heroDetailSkeleton: {
    width: '850px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottom: '1px solid rgba(224, 224, 224, 1)'
  },
  avatarSkeleton: {
    width: '150px',
    height: '150px',
    margin: '30px auto'
  },
  nameSkeleton: {
    margin: '10px 0px 0px 50px',
    height: '55px',
    width: '200px'
  },
  descriptionSkeleton: {
    margin: '-30px 50px 30px 50px',
    height: '300px'
  }
})(HeroDetailSkeleton);