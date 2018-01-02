//@flow
import React from 'react';
import {Search} from '../../components/search';
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
        describe('when there is text in the search box', () => {
            it('calls the fetchGifs function', () => {
                wrapper.find("input").instance().value = "abc";
                wrapper.find('.submit-button').simulate('click');
                expect(fetchGifs).toHaveBeenCalledWith("abc");
            });
        });

        describe('when there is no text in the search box', () => {
            it('does NOT call the fetchGifs function', () => {
                wrapper.find('.submit-button').simulate('click');
                expect(fetchGifs).not.toHaveBeenCalled();
            });
        });
    });

    describe('clicking the clear button', () => {
       beforeEach(() => {
           wrapper.find("input").instance().value = "abc";
       });

       it('clears the input and fetches a new batch of trending gifs', () => {
           wrapper.find('.clear-button').simulate('click');
           expect(fetchGifs).toHaveBeenCalled();
           expect(fetchGifs).not.toHaveBeenCalledWith(expect.any(String));
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