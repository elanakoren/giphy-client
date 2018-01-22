// @flow
import React from 'react';
import {GifListContainer} from '../../components/gifListContainer'; // unconnected component
import {shallow} from 'enzyme';
import {gifs} from '../fixtures/gifFixture';

describe('gifListContainer', () => {
    let wrapper, gifActions;

    beforeEach(() => {
        gifActions = {
            fetchGifs: jest.fn()
        };
        wrapper = shallow(<GifListContainer {...{gifActions, gifs}}/>);
    });

    describe('the unconnected component', () => {
        it('calls fetchGif', () => {
            expect(gifActions.fetchGifs).toHaveBeenCalled();
        });

        it('matches the snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
