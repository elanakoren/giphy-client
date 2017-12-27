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
        const {options} = this.props;

        const optionElements = options.map((option, key) => {
            return <option{...{key}}>{option.text}</option>
        });

        return (
            <select
                className="select-box"
                onChange={() => this.changeSortOrder()}>
                {optionElements}
            </select>
        )
    }
}

export default SortBar;