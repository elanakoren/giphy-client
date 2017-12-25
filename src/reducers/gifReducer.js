import initialState from './initialState';
import {FETCH_GIFS, RECEIVE_GIFS, CHANGE_GIF_ORDER} from '../actions/actionTypes';

export default function gifs(state = initialState.gifs, action) {
    let newState;
    switch (action.type) {
        case FETCH_GIFS:
            return state;
        case RECEIVE_GIFS:
            newState = action.gifs;
            return newState;
        default:
            return state;
    }
}