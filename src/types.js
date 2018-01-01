// @flow

/** Flow is more useful if we constrain it with custom types
 * that exactly match the actual structure of the data we're
 * manipulating. */

export type sortOrder = 'asc' | 'desc';

/** this represents a single gif object, as returned by the
 * Giphy API.
 */
export type gifDatum = {
    bitly_gif_url: string,
    bitly_url: string,
    content_url: string,
    embed_url: string,
    id: string,
    images: Object,
    import_datetime: string,
    is_indexable: number,
    is_sticker: number,
    rating: string,
    slug: string,
    source: string,
    source_post_url: string,
    source_tld: string,
    title: string,
    trending_datetime: string,
    type: string,
    url: string,
    username: string
};

/** this represents the entire GIF data object we store on the state, which
 * is a combination of the whole response from Giphy and the sort order.
 * */
export type gifData = {
    data: gifDatum[],
    meta: Object,
    pagination: Object,
    order?: sortOrder
};
