// @flow
import React, {Component} from 'react';
import type {sortOrder} from '../types';

type Props = {
    gifActions: Object,
    options: Object[],
    label: string,
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
        const {options, label} = this.props;

        const optionElements = options.map((option, key) => {
            return <option{...{key}}>{option.text}</option>
        });

        return (
            <div className="sort-control">
                {label && <label
                    htmlFor="select-sort"
                    className="select-label">
                    {label}
                </label>}
                <select
                    onChange={() => this.changeSortOrder()}
                    label={label}>
                    {optionElements}
                    id="select-sort"
                </select>
            </div>
        )
    }
}