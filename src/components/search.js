// @flow
import React, {Component} from 'react';

type Props = {
    gifActions: Object
}

export default class Search extends Component<Props> {
    searchQuery: ?HTMLInputElement | null;

    constructor(props: Props) {
        super(props);
        this.searchQuery = null;
    }

    render() {
        const {gifActions} = this.props;
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => {
                        this.searchQuery = input
                    }}/>
                <button onClick={() => gifActions.fetchGifs(this.searchQuery)}>
                    Search
                </button>
            </div>
        )
    }
}