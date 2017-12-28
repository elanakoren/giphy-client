import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class GifDetails extends Component {
    static propTypes = {
        title: PropTypes.string,
        username: PropTypes.string,
    };

    render() {
        const {title, username} = this.props;
        return <div className="gif-details">
            {title && <div> title: {title} </div>}
            {username && <div> author: {username} </div>}
            {!title && !username && <div>
                No details available
            </div>}
        </div>
    }
}