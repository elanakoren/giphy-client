// @flow
import React, {Component} from 'react';
import moment from 'moment';

type Props = {
    rating: string,
    username: string,
    import_datetime: string,
    showGifDetails: 'show-details' | 'hide-details',
}

export default class GifDetails extends Component<Props> {
    props: Props;

    render() {
        const {rating, username, showGifDetails, import_datetime} = this.props;
        return <div className={`${showGifDetails} gif-details`}>
            {rating && <div className="gif-detail-text"> rating: {rating} </div>}
            {username && <div className="gif-detail-text"> username: {username} </div>}
            {import_datetime && <div className="gif-detail-text date">uploaded: {moment(import_datetime).format("MMM Do YYYY")}</div>}
            {!rating && !username && !import_datetime && <div>
                No details available
            </div>}
        </div>
    }
}