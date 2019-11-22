import React from 'react';

import './App.css';
import NewIssueForm from './components/New';
import SignIn from './components/SignIn';
import AppRouter from './components/AppRouter';
// context api imports
import Nav from './context-api/Tickets/Nav';
import TicketList from './context-api/Tickets/ticketList';
import AddTicket from './context-api/Tickets/addTicket';
import { TicketProvider } from './context-api/Tickets/ticketContext';

const App = () => {
  return (
    <TicketProvider>
      <div>
        <SignIn />
        <NewIssueForm />
        {/* context api files */}
        <Nav />
        <TicketList />
        <AddTicket />
        <AppRouter />
      </div>
    </TicketProvider>
  );
};

export default App;
