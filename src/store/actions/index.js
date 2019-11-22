import { axiosWithAuth } from './utils/axiosAithAuth';

export const ADD_TICKET = 'ADD_TICKET';
export const FETCHING_MESSAGE_START = 'FETCHING_MESSAGE_START';
export const FETCHING_MESSAGE_SUCCESS = 'FETCHING_MESSAGE_SUCESS';
export const FETCHING_MESSAGE_FAILURE = 'FETCHING_MESSAGE_FAILURE';
export const DELETE_TICKET = 'DELETE_TICKET';


export const getTickets = () => dispatch => {
  dispatch({ type: FETCHING_MESSAGE_START });
  axiosWithAuth()
    .get('https://devdesk-backend.herokuapp.com/api/tickets')
    .then(result => {
      console.log(result);
      dispatch({ type: FETCHING_MESSAGE_SUCCESS, payload: result.data })
    })
    .catch(error => {
      console.log(error.toString())
      dispatch({ type: FETCHING_MESSAGE_FAILURE, payload: error.toString() })
    })
}


export const addTicket = (addTicket) => dispatch => {
  axios.post('https://devdesk-backend.herokuapp.com/api/tickets/', newTicket)
    .then(result => {
      console.log(result)
      dispatch({ type: FETCHING_MESSAGE_SUCCESS, payload: result.data })
    })
    .catch(error => {
      console.log(error.toString())
    })
}


export const deleteTicket = (id) => {
  return dispatch => {
    axiosWithAuth()
      .delete(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
      .then(result => {
        dispatch({ type: DELETE_TICKET, payload: result.data });
      })
      .catch(error => {
        console.log(error.toString())
      })
  };
}
