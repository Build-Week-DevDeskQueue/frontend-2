import React, { useState } from 'react';
import TicketDetails from './TicketDetails';
//import connect from 'react-redux';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { NavLink, Route, Link } from 'react-router-dom';

// import { TicketContext } from '../context-api/ticketContext';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
}));


export default function AddTicketForm({ addTicket }) {
  const [data, setData] = useState({
    description: '',
    type: '',
    owner: ''
  })
  const classes = useStyles();
  const handleChange = event => {
    setData(
      {
        ...data,
        [event.target.name]: event.target.value
      }
    );
  };

  return (
    <>
      <form className={classes.container}
        noValidate autoComplete="off"
        onSubmit={(e) => { addTicket(e, data) }}>
        <TextField
          required
          id="filled-required"
          label="Title"
          name="title"
          value={data.title}
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          required
          id="filled-required"
          label="Description"
          name="description"
          value={data.description}
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          required
          id="filled-required"
          label="Type"
          name="type"
          value={data.type}
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-number"
          label="Owner"
          type="number"
          name="owner"
          value={data.owner}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="date"
          label="Submitted Date"
          type="date"
          name="date"
          value={data.date}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <Button variant="contained"
          type="submit"
          color="primary"
          className={classes.button}>
          Submit Ticket
        </Button>
      </form>
      <br />
      <div className="back">
        <Link to="/"><h4>Back to Tickets</h4></Link>
      </div>
      <br />
    </>
  );
}


{/*const mapStateToProps = state =>{
  return {

  }
}

export default connect(mapStateToProps, {addTicket})(AddTicketForm);*/}