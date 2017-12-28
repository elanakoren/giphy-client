import React, {Component} from 'react';
import {SortBar} from './sortBar';
import Search from './search';

type Props = {
    gifActions: Object,
    options: Object[],
    label: string,
};


export default class Toolbar extends Component<Props> {
    props: Props;

    render() {
        const {options, gifActions, label} = this.props;
        return (
            <div className="toolbar-grid">
                <Search {...{gifActions}}/>
                <SortBar {...{options, gifActions, label}}/>
            </div>
        )
    }
}