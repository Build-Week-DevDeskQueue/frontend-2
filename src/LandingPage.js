import React, { useState, useEffect } from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import UserTickets from './components/UserTickets';
import Ticket from './components/Ticket';
import EditTicketForm from './components/EditTicketForm';
import AddTicketForm from './components/AddTicketForm';
import './LandingPage.css';
import Dashboard from './components/Dashboard';
import bluescreen from './images/bluescreen.jpg';
import { axiosWithAuth } from './utils/axiosWithAuth';
import dev_desk_logo from './dev_desk_logo.png';
import Logout from './components/Logout';



const LandingPage = props => {
    // initial state 
    const [listTickets, setTicketList] = useState([]);


    //render list 
    const setTicket = tickets => {
        setTicketList(tickets);
    };

    //update 
    const updateTicket = (e, ticket) => {
        e.preventDefault()
        axiosWithAuth()
            .put(`https://devdesk-backend.herokuapp.com/api/tickets/${ticket.id}`, ticket)
            .then(result => {
                //fetchTickets();
                //props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    //display GET request from api
    const fetchTickets = () => {
        axiosWithAuth()
            .get("https://devdesk-backend.herokuapp.com/api/tickets/")
            .then(result => {
                setTicket(result.data);
                console.log('fetchTickets', result.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    //call ticket list with GET
    useEffect(() => {
        fetchTickets();
    }, []);

    //delete and id of ticket using template literal
    const deleteTicket = id => {
        axiosWithAuth()
            .delete(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
            .then(result => {
                fetchTickets();
                props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    //add ticket function
    const addTicket = (e, values) => {
        e.preventDefault()

        console.log('values', values)
        axiosWithAuth()
            .post("https://devdesk-backend.herokuapp.com/api/tickets/", values)
            .then(result => {
                //fetchTickets();
                //props.history.push("/");
                console.log('addTicket', result.data);
            })
            .catch(error => {
                console.log('error', error.response);
            });
    };

    return (
        <>

            <header>
                <h1>DevDesk Queue</h1>
                <h4>Get Started solving your coding questions below</h4>
            </header>

            <div className="logo"><img src={dev_desk_logo} height="150px" width="400px" /></div>

            <br />
            <h2>DASHBOARD</h2>
            <Dashboard />
            <br />
            <img src={bluescreen} />
            <br />
            <br />
            <h1>Here is the Current Open Ticket List</h1>
            <br />
            <h4>Add, Save, or Delete from Tickets from Your Database.
        Admins may log in and Update Your Ticket once Received.</h4>
            <Route
                exact path="/"
                render={props => {
                    return (
                        <UserTickets
                            {...props}
                            setTicketList={setTicketList}
                            listTickets={listTickets}
                        />
                    );
                }}
            />
            <Route
                path="/tickets/:id"
                render={props => {
                    return (
                        <Ticket
                            {...props}
                            deleteTicket={deleteTicket}
                        />
                    );
                }}
            />
            <Route
                path="/update-ticket/:id"
                render={props => {
                    return (
                        <EditTicketForm
                            {...props}
                            listTickets={listTickets}
                            updateTicket={updateTicket}
                        />
                    );
                }}
            />
            <div className="add-ticket">
                <Link to="/add-ticket">Add Ticket</Link>
            </div>
            <Route
                path="/add-ticket"
                render={props => {
                    return <AddTicketForm
                        {...props}
                        addTicket={addTicket} />
                }}
            />
            <h4>Logout </h4>
        </>
    );
};

export default LandingPage;