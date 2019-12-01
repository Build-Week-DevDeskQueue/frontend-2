import React from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';


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

export const TicketCard = props => {
  const classes = useStyles();
  const { title, description, type, tried, owner, assigned, date } = props.ticket;
  return (
    <div className="ticket-card" {...props} >
      <h4>Title: {title}</h4>
      <span> Description: {description} </span>
      <h4> Type: {type} </h4>
      <h4> Owner: {owner} </h4>
      <span> date: {date} </span>
    </div>
  );
};

export default TicketCard; 