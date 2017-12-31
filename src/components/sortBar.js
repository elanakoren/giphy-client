// @flow
import React, {Component} from 'react';
import type {sortOrder} from '../types';

type Props = {
    gifActions: Object,
};

type State = {
    sortOrder: sortOrder,
};

export class SortBar extends Component<Props, State> {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            sortOrder: 'desc'
        }
    }

    changeSortOrder() {
        const {gifActions} = this.props;
        const {sortOrder} = this.state;
        let newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

        this.setState({sortOrder: newSortOrder}, () => {
            gifActions.changeGifOrder(newSortOrder);
        });
    }

    render() {
        return (
            <div className="sort-control">
                <label
                    htmlFor="select-sort"
                    className="select-label">
                    Sort by upload time:
                </label>
                <select
                    onChange={() => this.changeSortOrder()}
                    id="select-sort"
                    className="sort-dropdown">
                    <option>Newest first</option>
                    <option>Oldest first</option>
                </select>
            </div>
        )
    }
}