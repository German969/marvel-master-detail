import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as ExitIcon } from './assets/exit.svg';

export function HeroLinks({classes, hero}) {
  const getHeroURLs = (urls) => {
    return urls.map((url, index) => {
      const urlLabel = 'Heroe ' + url.type.charAt(0).toUpperCase() + url.type.slice(1);

      return (
        <ListItem key={index}>
          <ListItemIcon>
            <SvgIcon component={ExitIcon} viewBox="0 0 600 600" />
          </ListItemIcon>
          <Link href={url.url}>
            <ListItemText primary={urlLabel} />
          </Link>
        </ListItem>
      );
    });
  };

  return (
    <Card className={classes.heroLinks}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {'Resource Links'}
        </Typography>
        <List>
          {getHeroURLs(hero.urls)}
        </List>
      </CardContent>
    </Card>
  )
}

export default withStyles({
  heroLinks: {
    width: '700px',
    margin: 'auto'
  }
})(HeroLinks);