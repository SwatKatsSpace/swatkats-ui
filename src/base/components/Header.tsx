import React, { Fragment, Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// const styles = {
//   root: {
//     flexGrow: 1
//   }
// };

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Swatkats work in progress
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
      </Fragment>
    );
  }
}

// SimpleAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Header);
