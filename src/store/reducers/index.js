import { FETCHING_MESSAGE_SUCCESS } from '../actions';

//giving initial state data
const initialState = {
    'tickets': [
        {
            title: '',
            description: '',
            tried: '',
            owner: 0,
            description: '',
            id: 0
        }
    ]
};



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_MESSAGE_SUCCESS:
            return {
                ...state,
                tickets: action.payload
            }
        default:
            return state;
    }
};