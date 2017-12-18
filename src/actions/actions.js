import * as types from './actionTypes';
import rp from 'request-promise';

export function receiveGifs(gifs) {
    return {type: types.RECEIVE_GIFS, gifs};
}

export function fetchTodosRequest() {
    return {type: types.FETCH_GIFS}
}

export function fetchGifs() {
    return dispatch => {
        const options = {
            uri: 'https://api.giphy.com/v1/gifs/trending',
            qs: {
                api_key: process.env.REACT_APP_API_KEY,
            },
            limit: 20,
            method: 'GET',
            json: true
        };

        dispatch(fetchTodosRequest());
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
