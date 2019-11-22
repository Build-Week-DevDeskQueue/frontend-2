import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../actions/loginActions';

const initialState = {
  isLoading: false,
  error: ''
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        isLoading: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        error: ''
      };
    case LOGIN_ERROR:
      return {
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
