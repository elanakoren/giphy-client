import React from 'react';
import {Gif} from '../../components/gif';
import {shallow, mount} from 'enzyme';

describe('gif component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Gif {...{
            imgSrc: 'some-giphy-url',
            title: 'whoa cool gif',
            username: 'the best user'
        }}/>);
        expect(wrapper).toMatchSnapshot();
    });

    describe('clicking a gif', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = mount(<Gif {...{
                imgSrc: 'some-giphy-url',
                title: 'whoa cool gif',
                username: 'the best user'
            }}/>);
        });

        it('expands the gif and shows the details', () => {
            expect(wrapper.find('.expanded')).toHaveLength(0);
            expect(wrapper.find('.show-details')).toHaveLength(0);
            expect(wrapper.find('.hide-details')).toHaveLength(1);

            wrapper.find('.gif').simulate('click');

            expect(wrapper.find('.expanded')).toHaveLength(1);
            expect(wrapper.find('.show-details')).toHaveLength(1);
            expect(wrapper.find('.hide-details')).toHaveLength(0);
        });

        describe('clicking the gif a second time', () => {
            beforeEach(() => {
                wrapper.find('.gif').simulate('click');
                wrapper.find('.gif').simulate('click');
            });

            it('contracts the gif and hides the details', () => {
                expect(wrapper.find('.expanded')).toHaveLength(0);
                expect(wrapper.find('.show-details')).toHaveLength(0);
                expect(wrapper.find('.hide-details')).toHaveLength(1);
            });
        });
    });

    describe('when the component receives new props', () => {
       let wrapper;
        beforeEach(() => {
            wrapper = mount(<Gif {...{
                imgSrc: 'some-giphy-url',
                title: 'whoa cool gif',
                username: 'the best user'
            }}/>);
            wrapper.find('.gif').simulate('click');
            wrapper.setProps({title: 'new-title'});
        });

        it('contracts the gif if it is expanded', () => {
            expect(wrapper.find('.expanded')).toHaveLength(0);
            expect(wrapper.find('.show-details')).toHaveLength(0);
            expect(wrapper.find('.hide-details')).toHaveLength(1);
        });
    })
});