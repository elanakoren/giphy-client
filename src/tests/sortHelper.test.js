//@flow
import {gifs} from './fixtures/gifFixture';
import {sortByDateAscending, sortByDateDescending} from '../helpers/sortHelper'

describe('sortHelper', () => {
    describe('sortByDateDescending', () => {
        it('sorts gif data, newest to oldest', () => {
            const sortedGifs = gifs.data.sort(sortByDateDescending);
            const sortedTitles = sortedGifs.map(gif => {
               return gif.title;
            });

            expect(sortedTitles).toEqual(['newest', 'middle', 'oldest']);
        })
    });

    describe('sortByDateAscending', () => {
        it('sorts gif data, oldest to newest', () => {
            const sortedGifs = gifs.data.sort(sortByDateAscending);
            const sortedTitles = sortedGifs.map(gif => {
                return gif.title;
            });

            expect(sortedTitles).toEqual(['oldest', 'middle', 'newest']);
        })
    });
});