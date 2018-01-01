// @flow
import * as types from './actionTypes';
import rp from 'request-promise';
import type {sortOrder, gifData} from '../types';

export function receiveGifs(gifs: gifData) {
    return {type: types.RECEIVE_GIFS, gifs};
}

export function resetGifs() {
    return {type: types.RESET_GIFS}
}

export function changeGifOrder(order: sortOrder) {
    return {type: types.CHANGE_GIF_ORDER, order};
}

/** This function takes the search box's HTMLInputElement as its (optional) input
 * and pulls the value off it. If a value is present, it hits the
 * search endpoint. If no value is present, we can assume the user
 * was trying to retrieve the trending gifs, and we hit that endpoint
 * instead. Before the response is returned, it dispatches resetGifs,
 * which (in the reducer) removes any presently displayed GIFs from the state.
 * This isn't strictly necessary, but it makes it much clearer visually when
 * new GIFs have come in. Finally, it dispatches receiveGifs, which just merges
 * the newly retrieved GIFs onto the state.
*/
export function fetchGifs(q: ?HTMLInputElement) {
    const searchUri = 'https://api.giphy.com/v1/gifs/search';
    const trendingUri = 'https://api.giphy.com/v1/gifs/trending';
    let uri = q ? searchUri : trendingUri;

    return (dispatch: Function) => {
        const options = {
            uri,
            qs: {
                api_key: process.env.REACT_APP_API_KEY,
                q: q && q.value,
                limit: 25,
            },
            method: 'GET',
            json: true
        };

        dispatch(resetGifs());
        return rp.get(options)
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log(error);
            })
            .then(gifs => dispatch(receiveGifs(gifs)))
    };
}
