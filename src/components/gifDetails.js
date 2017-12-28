// @flow
import React, {Component} from 'react';

type Props = {
    title: ?string,
    username: ?string
}

export default class GifDetails extends Component<Props> {
    props: Props;

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