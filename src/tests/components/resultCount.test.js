// @flow
import React from 'react';
import {ResultCount} from '../../components/resultCount';
import {shallow} from 'enzyme';

describe('resultCount', () => {
    describe('when passed a count', () => {
        it('renders correctly', () => {
            const wrapper = shallow(<ResultCount {...{
                resultCount: 25,
            }}/>);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when not passed a count', () => {
        it('renders correctly', () => {
            const wrapper = shallow(<ResultCount {...{
                resultCount: undefined
            }}/>);

            expect(wrapper).toMatchSnapshot();
        });

    });
});