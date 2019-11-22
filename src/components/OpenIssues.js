import React, { useState, useContext } from 'react';
import Issue from './Issue';
import { TicketContext } from './UserTickets';

// creating component that renders data.
const OpenIssues = () => {
  const [tickets, setTickets] = useState(TicketContext);

  return (
    <TicketContext.Consumer value={value.tickets}>
      <div>
        {tickets.map(issue => (
          <Issue type={issue.type} key={issue.id} />
        ))}
      </div>
    </TicketContext.Consumer>
  );
};
