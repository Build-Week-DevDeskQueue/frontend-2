import {
  TICKET_NEW,
  TICKET_UPDATE,
  TICKET_ERROR,
  TICKET_ADD
} from '../actions/ticketActions';

const initialState = {
  isLoading: false,
  error: ''
};

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case TICKET_NEW:
      return {
        isLoading: true,
        error: ''
      };
    case TICKET_UPDATE:
      return {
        isLoading: false,
        error: ''
      };
    case TICKET_ERROR:
      return {
        isLoading: false,
        error: action.payload
      };
    case TICKET_ADD:
      return {
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
