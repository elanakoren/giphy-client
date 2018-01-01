// @flow
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/actions';
import * as types from '../../actions/actionTypes';
import rp from 'request-promise';
import mockStore from 'flow-typed'
import {gifFixture} from '../fixtures/gifFixture';

const middlewares = [thunk];
const mockReduxStore: mockStore = configureMockStore(middlewares);

describe('actions', () => {
    describe('receiveGifs', () => {
       it('should create the appropriate action', () => {
           const expectedAction = {
             type: types.RECEIVE_GIFS,
               gifFixture
           };
           expect(actions.receiveGifs(gifFixture)).toEqual(expectedAction);
       });
    });

    describe('resetGifs', () => {
        it('should create the appropriate action', () => {
            const expectedAction = {
                type: types.RESET_GIFS
            };
            expect(actions.resetGifs()).toEqual(expectedAction);
        })
    });

    describe('changeGifOrder', () => {
        it('should create the appropriate action', () => {
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
            // fake a successful response from the giphy API
            rp.get = jest.fn();
            rp.get.mockReturnValue(promise);

            const dispatchedActions = [
                {type: types.RESET_GIFS},
                {type: types.RECEIVE_GIFS, gifs: response},
            ];

            const store = mockReduxStore({gifs: []});

            // dispatching fetchGifs should cause RESET_GIFS and RECEIVE_GIFS
            // to be dispatched, and the RECEIVE_GIFS action should
            // carry the successful response along with it.
            return store.dispatch(actions.fetchGifs()).then(() => {
                expect(store.getActions()).toEqual(dispatchedActions)
            });
        });
    });
});