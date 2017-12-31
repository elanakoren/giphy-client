// @flow
import React, {Component} from 'react';
import moment from 'moment';

type Props = {
    title: ?string,
    username: ?string,
    import_datetime: ?string,
    showGifDetails: 'show-details' | 'hide-details',
}

export default class GifDetails extends Component<Props> {
    props: Props;

    render() {
        const {title, username, showGifDetails, import_datetime} = this.props;
        return <div className={`${showGifDetails} gif-details`}>
            {title && <div className="gif-detail-text"> title: {title} </div>}
            {username && <div className="gif-detail-text"> author: {username} </div>}
            {import_datetime && <div className="gif-detail-text date">uploaded: {moment(import_datetime).format("MMM Do YYYY")}</div>}
            {!title && !username && <div>
                No details available
            </div>}
        </div>
    }
}