import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Gif extends Component {
    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
    };

    render() {
        const {imgSrc} = this.props;
        return (
            <div className="col">
                <img className="gif" src={imgSrc}/>
            </div>);
    }
}