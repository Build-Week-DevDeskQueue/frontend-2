import React from 'react';

const Ticket = ({ name, type }) => {
  // pssing name, type props thru return
  return (
    <div>
      <h3>{name}</h3>
      <h3>{type}</h3>
    </div>
  );
};

export default Ticket;
