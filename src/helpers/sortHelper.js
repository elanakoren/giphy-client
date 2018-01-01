// @flow
import moment from 'moment';
import type {gifDatum} from '../types';

// takes a list of gifDatum and returns it, newest-to-oldest
export function sortByDateDescending(firstGifDatum: gifDatum, secondGifDatum: gifDatum) {
    let firstGifDate = moment(firstGifDatum.import_datetime).format();
    let secondGifDate = moment(secondGifDatum.import_datetime).format();

    if (firstGifDate > secondGifDate) {
        return -1;
    }

    if (firstGifDate < secondGifDate) {
        return 1;
    }

    return 0;
}

// takes a list of gifDatum and returns it, oldest-to-newest
export function sortByDateAscending(firstGifDatum: gifDatum, secondGifDatum: gifDatum) {
    let firstGifDate = moment(firstGifDatum.import_datetime).format();
    let secondGifDate = moment(secondGifDatum.import_datetime).format();

    if (firstGifDate < secondGifDate) {
        return -1;
    }

    if (firstGifDate > secondGifDate) {
        return 1;
    }

    return 0;
}
