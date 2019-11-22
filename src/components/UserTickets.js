import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import TicketDetails from "./TicketDetails";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// create state management. to implement more state management. 
export const TicketContext = createContext();
// implement context api consumer function.
export default function UserTickets(props) {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("https://devdesk-backend.herokuapp.com/api/tickets/")
      .then(result => setTickets(result.data))
      .catch(error => console.log(error));
  }, [tickets])
  //useEffect runs axios dependency array

  const handleDelete = (event, id) => {
    event.preventDefault()
    const ticket = tickets.find(ticket => ticket.id === id)

    if (window.confirm('Sure you want to delete this?'))
      setTickets(tickets.filter(ticket => ticket.id !== id))
    axios.delete(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
      .then(result => {
        alert('Deleted.')
      })
      .catch(error => {
        console.log(error)
        setTickets([...tickets, ticket])
      })
  }

  return (
    <>
      <div className="ticket-list">
        {tickets.map(ticket => (
          <>
            <TicketDetails key={ticket.id} {...props} ticket={ticket} handleDelete={handleDelete} />
          </>
        ))}
      </div>
      <TicketContext.Provider value={[tickets,setTickets]}>
      {props.children}
      </TicketContext.Provider>
    </>
  );
}