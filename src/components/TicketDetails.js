import React from 'react';
import { Link } from 'react-router-dom';
import { TicketCard } from './TicketCard';
import Button from '@material-ui/core/Button';
//import MUICard from './MUICard';


export default function TicketDetails({ ticket, handleDelete }) {
  return (
    <Link to={`/tickets/${ticket.id}`}>
      <TicketCard ticket={ticket} handleDelete={handleDelete} />
      <button className="delete-btn" onClick={(event) => handleDelete(event, ticket.id)}>Delete </button>
    </Link>
  );
}