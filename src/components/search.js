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
        // flow demands these type checks
        if (this.searchQuery instanceof HTMLInputElement) {
            // clear the input box
            this.searchQuery.value = '';
        }
        // fetch a new batch of trending gifs to replace the ones on the state
        gifActions.fetchGifs();
    }

    performSearch(query: ?HTMLInputElement) {
        const {gifActions} = this.props;
        if (this.searchQuery && !this.searchQuery.value) return;
        gifActions.fetchGifs(query)
    }

    render() {
        return (
            <div className="search-control">
                <input
                    type="text"
                    ref={(input) => {
                        this.searchQuery = input
                    }}/>
                <button
                    className="search-button submit-button"
                    onClick={() => this.performSearch(this.searchQuery)}>
                    Search
                </button>
                <button
                    className="search-button clear-button"
                    onClick={() => this.clearSearch()}>
                    Clear Search
                </button>
            </div>
        )
    }
}