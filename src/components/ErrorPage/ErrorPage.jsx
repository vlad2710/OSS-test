import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const useStyles = (theme) => ({
  textWarning: {
    marginTop: theme.spacing(3),
  },
});

class ErrorPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Typography
        variant="h3"
        align="center"
        color="secondary"
        className={classes.textWarning}
      >
        Access denied!
      </Typography>
    );
  }
}

export default withStyles(useStyles)(ErrorPage);
