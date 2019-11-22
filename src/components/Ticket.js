import React from 'react';
import axios from 'axios';
import MUICard from './MUICard';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Button from '@material-ui/core/Button';

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: null
    };
  }

  componentDidMount() {
    this.fetchTicket(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchTicket(newProps.match.params.id);
    }
  }

  fetchTicket = id => {
    axiosWithAuth()
      .get(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
      .then(result => this.setState({ ticket: result.data }))
      .catch(error => console.log(error));
  };

  updateTicket = () => {
    this.props.history.push({
      pathname: `/update-ticket/${this.state.ticket.id}`,
      state: { ticket: this.state.ticket }
    })
  }

  render() {
    if (!this.state.ticket) {
      return <div>Loading...</div>;
    }

    return (
      <div className="card-wrapper">
        <MUICard ticket={this.state.ticket} />

        <button class="update-btn" onClick={this.updateTicket}>
          Update Ticket
        </button>
      </div>
    );
  }
}