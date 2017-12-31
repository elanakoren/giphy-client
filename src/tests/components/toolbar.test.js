// @flow
import React from 'react';
import Toolbar from '../../components/toolbar';
import {shallow} from 'enzyme';

describe('gifList', () => {
    it('renders correctly', () => {
        const fakeGifActions = {firstFn: () => {}};
        const wrapper = shallow(<Toolbar {...{gifActions: fakeGifActions}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});