import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../dev_desk_logo.png';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  navRoot: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  buttonColor: {
    color: '#E4137B',
    textDecoration: 'none'
  },
  navTitle: {
    flexGrow: 1
  },
  navColors: {
    backgroundColor: 'white'
  },
  avatar: {
    margin: 10,
    width: 160,
    height: 60
  },
  linkAlign: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [nav] = useState();
  return (
    <main>
      <div className="navRoot">
        <AppBar position="static" className={classes.navColors}>
          <Toolbar className={classes.linkAlign}>
            <img src={logo} alt="navBarLogo" height="60" />

            <NavLink to="/" className={classes.buttonColor}>
              <Typography variant="h6" className={classes.navTitle} to="/">
                <Button color="inherit" className={classes.buttonColor}>
                  Dashboard
                </Button>
              </Typography>
            </NavLink>

            <NavLink to="/open" className={classes.buttonColor}>
              <Typography variant="h6" className={classes.navTitle} to="/open">
                <Button color="inherit" className={classes.buttonColor}>
                  Open Issues
                </Button>
              </Typography>
            </NavLink>

            <NavLink to="/resolved" className={classes.buttonColor}>
              <Typography
                variant="h6"
                className={classes.navTitle}
                to="/resolved"
              >
                <Button color="inherit" className={classes.buttonColor}>
                  Resolved Issue
                </Button>
              </Typography>
            </NavLink>

            <NavLink to="/new" className={classes.buttonColor}>
              <Typography variant="h6" className={classes.navTitle} to="/new">
                <Button color="inherit" className={classes.buttonColor}>
                  New Issue
                </Button>
              </Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>

      {/*<Route exact path="/" component={Dashboard} />*/}
      {/*<Route exact path="/open" component={OpenIssues} />*/}
      {/*<Route exact path="/resolved" component={ResolvedIssues} />*/}
      {/*<Route exact path="/new" component={NewIssue} />*/}
    </main>
  );
};

export default NavBar;