import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function HeroRow({ hero, classes }) {
  return (
    <TableRow>
      <TableCell align="left" className={classes.heroInfoCell}>
        <Avatar alt={hero.name} src="/images/no-image.png" className={classes.heroRowAvatar} />
        <h3 className={classes.heroName}>{hero.name}</h3>
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        <SvgIcon viewBox="0 0 480 480">
          <g>
            <g id="Speech_Bubble_49_">
              <g>
                <g>
                  <path d="m445.62 299.38 66.19-267.02-255.9-16.16-255.91-16.16 61.12 363.42 113.57-18.93-7.95 29.57 40.6 26.15-14.65 111.52 63.22-60.15 80.61-76.69-54.02-41.14 3.66-7.83z" fill="#ff8fb8"/>
                </g>
              </g>
            </g>
            <path d="m286.16 325.96-3.66 7.83 54.02 41.14-80.61 76.69v-435.42l255.9 16.16-66.19 267.02z" fill="#ff5f96"/>
          </g>
        </SvgIcon>
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>
        {'Se'}
      </TableCell>
      <TableCell align="right" className={classes.flagCell}>{'E'}</TableCell>
      <TableCell align="right" className={classes.flagCell}>{'St'}</TableCell>
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
  }
})(HeroRow);