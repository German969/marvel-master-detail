import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import getHeroContentProps from './hero-content-props';
import SvgIcon from '@material-ui/core/SvgIcon';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import { ReactComponent as SeriesIcon } from './assets/series.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAndRecent } from '../stores/store-actions';

function HeroRow({ classes, hero }) {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.selected);
  const isItemSelected = hero.id === selected;

  const handleClick = (event, hero) => {
    dispatch(setSelectedAndRecent(hero));
  };

  const getTableRowProps = () => {
    return {
      hover: true,
      onClick: (event) => handleClick(event, hero),
      tabIndex: -1,
      key: hero.name,
      selected: isItemSelected,
      className: classes.heroRow
    };
  };

  const contentProps = getHeroContentProps({
    comics: hero.comics,
    series: hero.series,
    events: hero.events,
    stories: hero.stories,
    classes
  });

  const avatarURL = hero.thumbnail.path + '.' + hero.thumbnail.extension;

  return (
    <TableRow {...getTableRowProps()}>
      <TableCell align="left" className={classes.heroInfoCell}>
        <Avatar alt={hero.name} src={avatarURL} className={classes.heroRowAvatar} />
        <h3 className={classes.heroName}>{hero.name}</h3>
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        <Tooltip title={contentProps.comics.label} placement="top" aria-label={contentProps.comics.label}>
          <SvgIcon component={contentProps.comics.icon} viewBox="0 0 480 480" />
        </Tooltip>
      </TableCell>
      <TableCell align="right" className={[classes.flagCell, contentProps.series.class]}>
        <Tooltip title={contentProps.series.label} placement="top" aria-label={contentProps.series.label}>
          <SvgIcon component={SeriesIcon} viewBox="0 0 480 480" />
        </Tooltip>
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        <Tooltip title={contentProps.events.label} placement="top" aria-label={contentProps.events.label}>
          <SvgIcon component={contentProps.events.icon} viewBox="0 0 480 480" />
        </Tooltip>
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        <Tooltip title={contentProps.stories.label} placement="top" aria-label={contentProps.stories.label}>
          <SvgIcon component={contentProps.stories.icon} viewBox="0 0 480 480" />
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}

export default withStyles({
  heroRowAvatar: {
    marginRight: '10px'
  },
  heroName: {
    display: 'inline',
    margin: 'auto 0',
    'max-width': '102px',
    'word-break': 'break-word'
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
  },
  seriesIconDisabled: {
    color: 'darkgrey'
  },
  heroRow: {
    cursor: 'pointer'
  }
})(HeroRow);