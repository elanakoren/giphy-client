import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchQuery = '';
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
                <button onClick={() => gifActions.fetchGifs(this.searchQuery.value)}>
                    Search
                </button>
            </div>
        )
    }
}