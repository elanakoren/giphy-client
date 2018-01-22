// @flow
import moment from 'moment';
import type {gifDatum, sortOrder} from '../types';

// takes a list of gifDatum and returns it, newest-to-oldest
export function sortByDateDescending(firstGifDatum: gifDatum, secondGifDatum: gifDatum) {
    return sortByDate(firstGifDatum, secondGifDatum, 'desc')
}

// takes a list of gifDatum and returns it, oldest-to-newest
export function sortByDateAscending(firstGifDatum: gifDatum, secondGifDatum: gifDatum) {
    return sortByDate(firstGifDatum, secondGifDatum, 'asc')
}

function sortByDate(firstGifDatum: gifDatum, secondGifDatum: gifDatum, sort: sortOrder) {
    let firstGifDate = moment(firstGifDatum.import_datetime).format();
    let secondGifDate = moment(secondGifDatum.import_datetime).format();

    if (firstGifDate > secondGifDate) {
        return sort === 'desc' ? -1 : 1;
    }

    if (firstGifDate < secondGifDate) {
        return sort === 'desc' ? 1 : -1;
    }
    return 0;
}
