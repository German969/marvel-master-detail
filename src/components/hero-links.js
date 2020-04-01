import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

function HeroLinks({classes, hero}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getHeroLinksTabsProps = () => {
    return {
      value,
      onChange: handleChange,
      indicatorColor: 'primary',
      textColor: 'primary',
      variant: 'fullWidth',
      'aria-label': 'Full width Hero link tabs'
    };
  };

  const a11yTabProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`
    }
  };

  const getTabPanel = (tab, index) => {
    return (
      <List hidden={(index !== value)}>
        {hero[tab].items.map((item) => (
          <ListItem>
            <ListItemText
              primary={item.name}
            />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <div className={classes.heroLinks}>
      <AppBar position="static" color="default">
        <Tabs {...getHeroLinksTabsProps()}>
          <Tab label="Comics" {...a11yTabProps(0)} />
          <Tab label="Series" {...a11yTabProps(1)} />
          <Tab label="Events" {...a11yTabProps(2)} />
          <Tab label="Stories" {...a11yTabProps(3)} />
        </Tabs>
      </AppBar>
      <Paper className={classes.linksPanel}>
        {getTabPanel('comics', 0)}
        {getTabPanel('series', 1)}
        {getTabPanel('stories', 2)}
        {getTabPanel('events', 3)}
      </Paper>
    </div>
  );
}

export default withStyles({
  heroLinks: {
    width: '700px',
    margin: 'auto'
  },
  linksPanel: {
    maxHeight: '395px',
    overflow: 'scroll'
  }
})(HeroLinks);