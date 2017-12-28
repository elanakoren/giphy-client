import React, {Component} from 'react';
import {SortBar} from './sortBar';
import Search from './search';
import PropTypes from 'prop-types';

export default class Toolbar extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        gifActions: PropTypes.object.isRequired,
    };

    render() {
        const {options, gifActions, label} = this.props;
        return (
            <div className="toolbar-row">
                <Search {...{gifActions}}/>
                <SortBar {...{options, gifActions, label}}/>
            </div>
        )
    }
}