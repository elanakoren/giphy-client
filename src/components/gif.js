import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GifDetails from './gifDetails';

export class Gif extends Component {
    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
    };

    constructor(props, context) {
        super();
        this.state = {expanded: false};
    }

    onGifClick() {
        const {expanded} = this.state;
        this.setState({expanded: !expanded});
    }

    render() {
        const {imgSrc, title, username} = this.props;
        const {expanded} = this.state;

        return (
            <div className="grid-cell">
                <img className="gif" src={imgSrc} onClick={() => this.onGifClick()}/>
                {expanded && <GifDetails {...{title, username}}/>}
            </div>);
    }
}