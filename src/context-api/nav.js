import React, { useContext } from "react";
import { TicketContext } from "./ticketContext";

const Nav = () => {
  const [tickets, setTickets] = useContext(TicketContext);
  // pssing name, type props thru return
  return (
    <div>
      <h3>Carl's Tickets</h3>
      <p>Ticket List: {tickets.length}</p>
    </div>
  );
};

export default Nav;
