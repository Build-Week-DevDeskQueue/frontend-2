import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import logo from '../dev_desk_logo.png';

const useStyles = makeStyles(theme => ({
  navRoot: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  buttonColor: {
    color: '#E4137B'
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
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <main>
      <div className="navRoot">
        <AppBar position="static" className={classes.navColors}>
          <Toolbar>
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

            <NavLink to="/signin" className={classes.buttonColor}>
              <Typography variant="h6" className={classes.navTitle}>
                <Button color="inherit" className={classes.buttonColor}>
                  Sign In
                </Button>
              </Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    </main>
  );
};

export default NavBar;
