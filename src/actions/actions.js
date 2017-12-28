// @flow
import * as types from './actionTypes';
import rp from 'request-promise';
import type {sortOrder} from '../types';

export function receiveGifs(gifs: Object) {
    return {type: types.RECEIVE_GIFS, gifs};
}

export function fetchGifRequest() {
    return {type: types.FETCH_GIFS}
}

export function changeGifOrder(order: sortOrder) {
    return {type: types.CHANGE_GIF_ORDER, order};
}

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

        dispatch(fetchGifRequest());
        return rp.get(options)
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log(error);
            })
            .then(gifs => dispatch(receiveGifs(gifs)));
    };
}
