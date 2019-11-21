import React, { useState } from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import NavBar from './NavBar';
import BottomNavBar from './BottomNavBar';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100
  },
  root: {
    padding: theme.spacing(3, 2),
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    marginLeft: 350,
    display: 'flex'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center'
  },
  navRoot: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navTitle: {
    flexGrow: 1
  }
}));

const SignIn = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: '', userNameError: '', password: '', password });
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(user.username);
    alert(user.password);
  };

  return (
    <div>
      <NavBar />

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
            <LockOpenOutlinedIcon />
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
      <BottomNavBar />
    </div>
  );
};

export default SignIn;
