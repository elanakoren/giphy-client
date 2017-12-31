//@flow
import React from 'react';
import {SortBar} from '../../components/sortBar';
import {shallow} from 'enzyme';

describe('sortbar component', () => {
    let wrapper, changeGifOrder;
    beforeEach(() =>{
        changeGifOrder = jest.fn();
        wrapper = shallow(<SortBar {...{
            gifActions: {changeGifOrder},
        }}/>);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('defaults to sorting descendingly (newest first)', () => {
        expect(wrapper.state().sortOrder).toEqual('desc');
    });

    describe('clicking the sortbar', () => {
        beforeEach(() => {
            wrapper.find('select').simulate('change', {target: { value : 'asc'}});
        });

        it('calls the changeGifOrder action and updates the state', () => {
            expect(changeGifOrder).toHaveBeenCalledWith('asc');
            expect(wrapper.state().sortOrder).toEqual('asc');
        });
    });
});