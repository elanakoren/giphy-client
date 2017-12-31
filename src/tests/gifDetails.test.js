import React from 'react';
import GifDetails from '../components/gifDetails';
import {shallow} from 'enzyme';

describe('gifDetails component', () => {
    describe('when showing gif details', () => {
        it('renders correctly', () => {
            const wrapper = shallow(<GifDetails {...{
                title: 'some-title',
                username: 'some-username',
                showGifDetails: 'show-details'
            }}/>);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when hiding gif details', () => {
        it('renders correctly', () => {
            const wrapper = shallow(<GifDetails {...{
                title: 'some-title',
                username: 'some-username',
                showGifDetails: 'hide-details'
            }}/>);
            expect(wrapper).toMatchSnapshot();
        });
    });
});