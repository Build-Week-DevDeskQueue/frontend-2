import React, { useState, useContext } from "react";
import Ticket from "./ticket";
// import TicketContext from ticketcontext
import { TicketContext } from "./ticketContext";

const TicketList = () => {
  // passing data from ticketContext thru -
  const [tickets, setTickets] = useContext(TicketContext);

  return (
    <div>
      {tickets.map(ticket => (
        <Ticket name={ticket.name} type={ticket.type} key={ticket.id} />
      ))}
    </div>
  );
};

export default TicketList;
