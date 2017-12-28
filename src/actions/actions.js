import * as types from './actionTypes';
import rp from 'request-promise';

export function receiveGifs(gifs) {
    return {type: types.RECEIVE_GIFS, gifs};
}

export function fetchGifRequest() {
    return {type: types.FETCH_GIFS}
}

export function changeGifOrder(order) {
    return {type: types.CHANGE_GIF_ORDER, order};
}

export function fetchGifs(q) {
    const searchUri = 'https://api.giphy.com/v1/gifs/search';
    const trendingUri = 'https://api.giphy.com/v1/gifs/trending';
    let uri = q ? searchUri : trendingUri;

    return dispatch => {
        const options = {
            uri,
            qs: {
                api_key: process.env.REACT_APP_API_KEY,
                q,
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
