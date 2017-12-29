// @flow
export type sortOrder = 'asc' | 'desc';

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

export type gifData = {
    data: gifDatum[],
    meta: Object,
    pagination: Object,
    order?: sortOrder
};
