import React, { useContext } from 'react';

const Issue= ({ type }) => {
    // pssing name, type props thru return
    return(
        <div>
        {/* <h3>{name}</h3> */}
        <h1>Issue</h1>
        <h3>{type}</h3>
        </div>
    );
}

export default Issue;