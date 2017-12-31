// @flow
import React from 'react';
import GifDetails from '../../components/gifDetails';
import {shallow} from 'enzyme';

describe('gifDetails component', () => {
    describe('when showing gif details', () => {
        it('renders correctly', () => {
            const wrapper = shallow(<GifDetails {...{
                title: 'some-title',
                username: 'some-username',
                showGifDetails: 'show-details',
                import_datetime: '1970-01-01 00:00:00'
            }}/>);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when hiding gif details', () => {
        it('renders correctly', () => {
            const wrapper = shallow(<GifDetails {...{
                title: 'some-title',
                username: 'some-username',
                showGifDetails: 'hide-details',
                import_datetime: '1970-01-01 00:00:00'
            }}/>);
            expect(wrapper).toMatchSnapshot();
        });
    });
});