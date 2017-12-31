//@flow
import React from 'react';
import Search from '../../components/search';
import {mount, shallow} from 'enzyme';

describe('search', () => {
    let wrapper, fetchGifs;
    beforeEach(() => {
        fetchGifs = jest.fn();
        wrapper = mount(<Search {...{
            gifActions: {fetchGifs},
        }}/>);
    });

    describe('clicking the search button', () => {
        it('calls the fetchGifs function', () => {
            wrapper.find('.submit-button').simulate('click');
            expect(fetchGifs).toHaveBeenCalledWith(expect.any(HTMLInputElement));
        });
    });

    describe('clicking the clear button', () => {
       beforeEach(() => {
           wrapper.find('input').simulate('keydown', { which: 'a' });
       });

       it('clears the input and fetches a new batch of trending gifs', () => {
           wrapper.find('.clear-button').simulate('click');
           expect(fetchGifs).toHaveBeenCalled();
           expect(fetchGifs).not.toHaveBeenCalledWith(expect.any(HTMLInputElement));
           expect(wrapper.find('input').props().value).toEqual(undefined)
       });
    });

    describe('the snapshot', () => {
        beforeEach(() => {
            fetchGifs = jest.fn();
            wrapper = shallow(<Search {...{
                gifActions: {fetchGifs},
            }}/>);
        });

        it('matches the snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});