import initialState from './initialState';
import {FETCH_GIFS, RECEIVE_GIFS, CHANGE_GIF_ORDER} from '../actions/actionTypes';

export default function gifs(state = initialState.gifs, action) {
    let newState;

    switch (action.type) {
        case FETCH_GIFS:
            newState = {order: state.order};
            return newState;
        case RECEIVE_GIFS:
            newState = {...action.gifs, order: state.order};
            return newState;
        case CHANGE_GIF_ORDER:
            newState = {...state, order: action.order};
            return newState;
        default:
            return state;
    }
}