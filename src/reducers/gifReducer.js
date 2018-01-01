// @flow
import initialState from './initialState';
import {RESET_GIFS, RECEIVE_GIFS, CHANGE_GIF_ORDER} from '../actions/actionTypes';

export default function gifs(state: Object = initialState.gifs, action: Object) {
    let newState;

    switch (action.type) {
        case RESET_GIFS:
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