import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SortBar extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        gifActions: PropTypes.object.isRequired,
    };

    constructor(props) {
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

export default SortBar;