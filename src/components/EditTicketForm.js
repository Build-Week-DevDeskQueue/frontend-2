import React, { useState, useEffect, useContext } from "react";
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';

import { TicketContext } from "../LandingPage";

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

export default function EditTicketForm({ listTickets, match, updateTicket }) {
  const [data, setData] = useState({ listTickets })
  // const [data, setData] = useContext(TicketContext);

  console.log('ticketformdata', data)
  useEffect(() => {
    const ticketToUpdate = listTickets.find(item => {
      return item.id === Number(match.params.id);
    });
    console.log('ticketToUpdate', ticketToUpdate)
    setData(ticketToUpdate)
  }, []);

  const handleChange = event => {
    setData(
      {
        ...data,
        [event.target.name]: event.target.value
      }
    );
  };

  const handleSubmit = () => {
    this.props.history.push('/');
  }

  const classes = useStyles();

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => { updateTicket(e, data) }}>
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
          onSubmit={handleSubmit}
          className={classes.button}>
          Update Ticket
        </Button>
      </form>
      <div className="back">
        <Link to="/"><h4>Back to Tickets</h4></Link>
      </div>
    </>
  );
}