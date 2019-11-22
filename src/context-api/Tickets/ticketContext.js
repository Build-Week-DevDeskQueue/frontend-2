import React, { useState, createContext } from 'react';
// import TicketContext wherever you want to implement state management.
export const TicketContext = createContext();

export const TicketProvider = props => {
  const [tickets, setTickets] = useState([
    {
      name: 'Student Name',
      type: 'Ticket Problem',
      id: '1'
    },
    {
      name: 'Student Name1',
      type: 'Ticket Problem1',
      id: '2'
    },
    {
      name: 'Student Name2',
      type: 'Ticket Problem2',
      id: '3'
    }
  ]);
  return (
    // passing data through your children. sounds creepy. "hello" is passing a value.
    <TicketContext.Provider value={[tickets, setTickets]}>
      {props.children}
    </TicketContext.Provider>
  );
};
