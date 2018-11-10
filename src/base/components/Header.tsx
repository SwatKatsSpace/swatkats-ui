import React, { Component } from "react";
import { Button, Typography, Toolbar, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

export class Header extends Component {
  render() {
    return (
      <div style={styles.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={styles.grow}>
              Swatkats
            </Typography>
            <Link to={`/signup`}>
              <Button variant="contained" color="default">
                Signup
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
