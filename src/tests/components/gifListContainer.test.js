// @flow
import React from 'react';
import {GifListContainer} from '../../components/gifListContainer'; // unconnected component
import {shallow} from 'enzyme';
import {gifs} from '../fixtures/gifFixture';
import {sortByDateDescending, sortByDateAscending} from '../../helpers/sortHelper';

describe('gifListContainer', () => {
    let wrapper, gifActions;

    beforeEach(() => {
        gifs.data.sort = jest.fn();
        gifActions = {
            fetchGifs: jest.fn()
        };
        wrapper = shallow(<GifListContainer {...{gifActions, gifs}}/>);
    });

    describe('the unconnected component', () => {
        it('calls fetchGif', () => {
            expect(gifActions.fetchGifs).toHaveBeenCalled();
        });

        it('defaults to the correct sort', () => {
            expect(gifs.data.sort).toHaveBeenCalledWith(sortByDateDescending);
        });

        it('matches the snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('when the sort is ascending', () => {
            beforeEach(() => {
                gifs.order = 'asc';
                wrapper = shallow(<GifListContainer {...{gifActions, gifs}}/>);
            });

            it('uses the correct sort', () => {
                expect(gifs.data.sort).toHaveBeenCalledWith(sortByDateAscending);
            });
        })
    });
});
