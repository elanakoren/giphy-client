// @flow
import React, {Component} from 'react';
import {Gif} from './gif';

// todo: make this a custom type?
type Props = {
    gifData: Object
};

export class GifList extends Component<Props> {
    render() {
        const {gifData} = this.props;
        const gifs = gifData.map((gifDatum, i) => {
            return (<Gif
                key={i}
                imgSrc={gifDatum.images.fixed_width.url}
                title={gifDatum.title}
                username={gifDatum.username}
            />)
        });
        return (
            <div className="grid">
                {gifs}
            </div>
        );
    }
}