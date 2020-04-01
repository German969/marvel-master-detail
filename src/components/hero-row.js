import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { ReactComponent as ComicIcon } from './assets/comic.svg';
import { ReactComponent as SeriesIcon } from './assets/series.svg';
import { ReactComponent as EventIcon } from './assets/event.svg';
import { ReactComponent as StoryIcon } from './assets/story.svg';

function HeroRow({ hero, classes }) {
  return (
    <TableRow>
      <TableCell align="left" className={classes.heroInfoCell}>
        <Avatar alt={hero.name} src="/images/no-image.png" className={classes.heroRowAvatar} />
        <h3 className={classes.heroName}>{hero.name}</h3>
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        <SvgIcon component={ComicIcon} viewBox="0 0 480 480" />
      </TableCell>
      <TableCell align="right" className={[classes.flagCell, classes.seriesIcon]}>
        <SvgIcon component={SeriesIcon} viewBox="0 0 480 480" />
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        <SvgIcon component={EventIcon} viewBox="0 0 480 480" />
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        <SvgIcon component={StoryIcon} viewBox="0 0 480 480" />
      </TableCell>
    </TableRow>
  )
}

export default withStyles({
  heroRowAvatar: {
    display: 'inline-block',
    marginRight: '10px'
  },
  heroName: {
    display: 'inline',
    margin: '0',
    lineHeight: '40px'
  },
  heroInfoCell: {
    display: 'flex',
    margin: '-1px 0'
  },
  flagCell: {
    lineHeight: 0,
    width: '24px'
  },
  seriesIcon: {
    color: 'purple'
  }
})(HeroRow);