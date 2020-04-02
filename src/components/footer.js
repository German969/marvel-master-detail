import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function Footer({ classes }) {
  return (
    <Typography variant="h6" gutterBottom className={classes.footer}>
      Data provided by Marvel. © 2014 Marvel
    </Typography>
  );
}

export default withStyles({
  footer: {
    textAlign: 'center'
  }
})(Footer);