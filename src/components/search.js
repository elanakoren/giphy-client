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

    clearSearch() {
        const {gifActions} = this.props;
        if (this.searchQuery instanceof HTMLInputElement) {
            this.searchQuery.value = '';
        }
        gifActions.fetchGifs();

    }

    render() {
        const {gifActions} = this.props;
        return (
            <div className="search-control">
                <input
                    type="text"
                    ref={(input) => {
                        this.searchQuery = input
                    }}/>
                <button
                    className="search-button"
                    onClick={() => gifActions.fetchGifs(this.searchQuery)}>
                    Search
                </button>
                <button
                    className="search-button"
                    onClick={() => this.clearSearch()}>
                    Clear Search
                </button>
            </div>
        )
    }
}