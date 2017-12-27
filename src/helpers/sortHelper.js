export function sortByDateDescending(firstGifDatum, secondGifDatum) {
    let firstGifDate = new Date(firstGifDatum.import_datetime);
    let secondGifDate = new Date(secondGifDatum.import_datetime);

    if (firstGifDate > secondGifDate) {
        return -1;
    }

    if (firstGifDate < secondGifDate) {
        return 1;
    }

    return 0;
}

export function sortByDateAscending(firstGifDatum, secondGifDatum) {
    let firstGifDate = new Date(firstGifDatum.import_datetime);
    let secondGifDate = new Date(secondGifDatum.import_datetime);

    if (firstGifDate < secondGifDate) {
        return -1;
    }

    if (firstGifDate > secondGifDate) {
        return 1;
    }

    return 0;
}
