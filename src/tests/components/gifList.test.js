// @flow
import React from 'react';
import {GifList} from '../../components/gifList';
import {gifs} from '../fixtures/gifFixture';
import {shallow} from 'enzyme';

describe('gifList', () => {
   it('renders correctly', () => {
       const wrapper = shallow(<GifList {...{gifData: gifs.data}}/>);
       expect(wrapper).toMatchSnapshot();
   });
});