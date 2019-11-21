import React, { useState } from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, Icon, TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../dev_desk_logo.png';
import { NavLink } from 'react-router-dom';
import BottomNavBar from './BottomNavBar'

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
  const [user, setUser] = useState({ username: '', userNameError: '', password: '', passwordError: '' });
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <main>
      <div className="navRoot">
        <NavBar/>
        <Paper className={classes.root}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
            <div className={classes.centered}>
              <Typography variant="h2" gutterBottom>
                Sign in
              </Typography>
            </div>
            <div className={classes.centered}>
              {/*/!*<LockOpenOutlinedIcon />*!/ appears as not defined*/}
            </div>
            <div className={classes.centered}>
              <TextField
                name="username"
                label="Username"
                ref={register}
                type="text"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                // value={user.username || ''}
                // onChange={register}
              />
            </div>
            <div className={classes.centered}>
              {/*<TextField*/}
              {/*  name="password"*/}
              {/*  label="Password"*/}
              {/*  ref={register}*/}
              {/*  type="password"*/}
              {/*  className={classes.textField}*/}
              {/*  InputLabelProps={{*/}
              {/*    shrink: true*/}
              {/*  }}*/}
              {/*  margin="normal"*/}
              {/*  // value={user.password || ''}*/}
              {/*  // onChange={event => handleChange(event)}*/}
              {/*/>*/}

              <TextField
                name="password"
                label="Password"
                id="standard-error-helper-text"
                type="password"
                helperText="Incorrect entry"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                value={user.password}
                // onChange={event => handleChange(event)}
              />
            </div>
            <div className={classes.centered}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                className="classes.button"
              >
                Submit
              </Button>
            </div>
          </form>
        </Paper>
        <BottomNavBar/>
      </div>
      {/*<Route exact path="/" component={Dashboard} />*/}
      {/*<Route exact path="/open" component={OpenIssues} />*/}
      {/*<Route exact path="/resolved" component={ResolvedIssues} />*/}
      {/*<Route exact path="/new" component={NewIssue} />*/}
    </main>
  );
};

export default NavBar;