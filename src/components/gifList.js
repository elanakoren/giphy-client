import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Gif} from './gif';

// TODO: could be functional
export class GifList extends Component {
    static propTypes = {
        gifData: PropTypes.array,
    };

    render() {
        const {gifData} = this.props;
        const gifs = gifData.map((gifDatum, i) => {
            return (<Gif
                key={i}
                imgSrc={gifDatum.images.fixed_width.url}
            />)
        });
        return (
            <div className="grid">
                {gifs}
            </div>
        );
    }
}