import React, { useContext } from "react";
import { TicketContext } from "./ticketContext";

const Nav = () => {
  const [tickets, setTickets] = useContext(TicketContext);
  // pssing name, type props thru return
  return (
    <div>
      {/* <h1>{value}</h1> */}
      <h3>DevDeskQueue Tickets</h3>
      <p>Ticket List: {tickets.length}</p>
    </div>
  );
};

export default Nav;
