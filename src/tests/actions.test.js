import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/actions';
import * as types from '../actions/actionTypes';
import rp from 'request-promise';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    describe('receiveGifs', () => {
       it('should create an action to receive the gif response', () => {
           const gifs = {data: ['gif1', 'gif2'], pagination: {count: 25}}
           const expectedAction = {
             type: types.RECEIVE_GIFS,
               gifs
           };
           expect(actions.receiveGifs(gifs)).toEqual(expectedAction);
       });
    });

    describe('fetchTodosRequest', () => {

    });

    describe('changeGifOrder', () => {
        it('should create an action to change the sort order', () => {
            const order = 'desc';
            const expectedAction = {
                type: types.CHANGE_GIF_ORDER,
                order
            };
            expect(actions.changeGifOrder(order)).toEqual(expectedAction)
        });
    });

    describe('fetchGifs', () => {
        let promise, response;
        beforeEach(() => {
            response = {
                data: [
                    {type: "gif", id: "some-id-1", slug: "slug-1"},
                    {type: "gif", id: "some-id-2", slug: "slug-2"}
                ],
                meta: {status: 200, msg: "OK"},
                pagination: {count: 25, offset: 0},
            };
            promise = Promise.resolve(response);
        });

        it('dispatches actions and passes data to the store', () => {
            rp.get = jest.fn();
            rp.get.mockReturnValue(promise);

            const dispatchedActions = [
                {type: types.FETCH_GIFS},
                {type: types.RECEIVE_GIFS, gifs: response}
            ];

            const store = mockStore({gifs: []});

            return store.dispatch(actions.fetchGifs()).then(() => {
                expect(store.getActions()).toEqual(dispatchedActions)
            });
        });
    });
});