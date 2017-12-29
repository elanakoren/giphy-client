// @flow
import moment from 'moment';

export function sortByDateDescending(firstGifDatum: Object, secondGifDatum: Object) {
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

export function sortByDateAscending(firstGifDatum: Object, secondGifDatum: Object) {
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
