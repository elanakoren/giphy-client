// @flow
import React from 'react';
import {GifDetails} from '../../components/gifDetails';
import {shallow} from 'enzyme';

describe('gifDetails component', () => {
    describe('when showing gif details', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<GifDetails {...{
                rating: 'g',
                username: 'some-username',
                showGifDetails: 'show-details',
                import_datetime: '1970-01-01 00:00:00'
            }}/>);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('formats import_datetime with moment', () => {
            expect(wrapper.find('.date').text()).toEqual('uploaded: Jan 1st 1970')
        })
    });

    describe('when hiding gif details', () => {
        it('renders correctly', () => {
            const wrapper = shallow(<GifDetails {...{
                rating: 'g',
                username: 'some-username',
                showGifDetails: 'hide-details',
                import_datetime: '1970-01-01 00:00:00'
            }}/>);
            expect(wrapper).toMatchSnapshot();
        });
    });
});