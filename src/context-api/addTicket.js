import React, { useState, useContext } from "react";
import { TicketContext } from './ticketContext';

const AddTicket = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [tickets, setTickets] = useContext(TicketContext);

  const updateName = e => {
  setName(e.target.value);
  };
  const updateType = e => {
    setType(e.target.value);
  };
  const addTicket = e => {
    e.preventDefault();
    setTickets(prevTickets => [...prevTickets, {name: name, type: type }] )
  };

  return (
    <form onSubmit={addTicket}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="type" value={type} onChange={updateType} />
      <button>Submit</button>
    </form>
  );
};

export default AddTicket;
