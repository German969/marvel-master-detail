import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

function HeroLinks({classes}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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

  return (
    <div className={classes.heroLinks}>
      <AppBar position="static" color="default">
        <Tabs {...getHeroLinksTabsProps()}>
          <Tab label="Item One" {...a11yTabProps(0)} />
          <Tab label="Item Two" {...a11yTabProps(1)} />
          <Tab label="Item Three" {...a11yTabProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default withStyles({
  heroLinks: {
    width: '500px'
  }
})(HeroLinks);