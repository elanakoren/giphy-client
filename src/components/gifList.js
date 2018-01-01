// @flow
import React, {Component} from 'react';
import {Gif} from './gif';
import type {gifDatum} from '../types';

type Props = {
    gifData: gifDatum[]
};

export class GifList extends Component<Props> {
    render() {
        const {gifData} = this.props;
        const gifs = gifData.map((gifDatum, i) => {
            return (<Gif
                key={i}
                imgSrc={gifDatum.images.fixed_width.url}
                rating={gifDatum.rating}
                username={gifDatum.username}
                import_datetime={gifDatum.import_datetime}
            />)
        });
        return (
            <div className="grid">
                {gifs}
            </div>
        );
    }
}