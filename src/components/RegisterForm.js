import React, {useState} from 'react';
import axios from 'axios';
import {axiosWithAuth} from './utils/axiosWithAuth';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({username: '', password: ''})

  const handleChange = event => {
    setUser(
      {
        ...user,
        [event.target.name]: event.target.value
      }
    );
  };

  const login = event => {   
    event.preventDefault();
    console.log('user', user)
    axios
    .post("https://devdesk-backend.herokuapp.com/api/auth/login", user)
    .then(result => {
      console.log(result.data)
      localStorage.setItem("token", result.data.token)
      props.history.push("/");
    })
    .catch(error => {if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);})

  };

  return (
    
    <div className="login-form" login={login}>      
      <h2>Login to DevDesk Queue</h2>
      
    <form onSubmit={login} className={classes.container} noValidate autoComplete="off">

          
          <TextField
          required
          id="filled-required"
          name="username"
          label="Username"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="filled"
          value={user.username} 
          onChange={handleChange}
          />
          <TextField
          required
          id="filled-required"
          label="authType"
          name="authType"
          defaultValue="user"
          className={classes.textField}
          margin="normal"
          variant="filled"
          value={user.user} 
          onChange={handleChange}
          />
          <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          name="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
          value={user.password} 
          onChange={handleChange}
          />
  

       <Button variant="contained" 
       type="submit" 
       color="primary" 
       className={classes.button}>
       Register Me
       </Button>
      </form>
    </div>
  );
}

export default LoginForm;