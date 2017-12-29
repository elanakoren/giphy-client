// @flow
import initialState from './initialState';
import {FETCH_GIFS, RECEIVE_GIFS, CHANGE_GIF_ORDER} from '../actions/actionTypes';
import {sortByDateDescending, sortByDateAscending} from '../helpers/sortHelper';

export default function gifs(state: Object = initialState.gifs, action: Object) {
    let newState;

    switch (action.type) {
        case FETCH_GIFS:
            newState = {order: state.order};
            return newState;
        case RECEIVE_GIFS:
            newState = {...action.gifs, order: state.order};
            return newState;
        case CHANGE_GIF_ORDER:
            let copiedGifArray, sortedGifs;
            if (action.order === 'asc') {
                copiedGifArray = state.data.slice(0);
                sortedGifs = copiedGifArray.sort(sortByDateAscending);
            }
            else {
                copiedGifArray = state.data.slice(0);
                sortedGifs = copiedGifArray.sort(sortByDateDescending);
            }
            newState = {...state, order: action.order, data: sortedGifs};
            return newState;
        default:
            return state;
    }
}