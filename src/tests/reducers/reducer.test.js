// @flow
import gifReducer from '../../reducers/gifReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('gifReducer', () => {
    it('defaults to the initial state', () => {
        expect(gifReducer(undefined, {})).toEqual({
                order: 'desc'
        });
    });

    describe('when reset gifs is dispatched', () => {
        let state, action;
        beforeEach(() => {
            state = {
                data: ["one"],
                order: "desc",
            };
            action = {type: actionTypes.RESET_GIFS}
        });

        it('removes the old gifs from the state', () => {
            expect(gifReducer(state, action)).toEqual({order: 'desc'});
        });
    });

    describe('when receive gifs is dispatched', () => {
        let action, gifs;
        beforeEach(() => {
            gifs = {data: ['one', 'two'], pagination: {count: 25}};
            action = {
              type: actionTypes.RECEIVE_GIFS,
              gifs
            };
        });

        it('returns the new state', () => {
            const expectedState = {
                data: ["one", "two"],
                order: "desc",
                pagination: {count: 25}
            };

            expect(gifReducer({order: 'desc'}, action)).toEqual(expectedState);
        });
    });

    describe('when change gif order is dispatched', () => {
        let action, oldState;

        beforeEach(() => {
            action = {
                type: actionTypes.CHANGE_GIF_ORDER,
                order: 'asc'
            };

            oldState = {
                data: ['gif1', 'gif2'],
                order: 'desc'
            }
        });

        it('returns the new state', () => {
            expect(gifReducer(oldState, action)).toEqual({
                data: ['gif1', 'gif2'],
                order: 'asc'
            });
        });
    });
});