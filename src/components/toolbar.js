// @flow
import React, {Component} from 'react';
import {SortBar} from './sortBar';
import Search from './search';

type Props = {
    gifActions: Object,
};


export default class Toolbar extends Component<Props> {
    props: Props;

    render() {
        const {gifActions} = this.props;
        return (
            <div className="toolbar-grid">
                <Search {...{gifActions}}/>
                <SortBar {...{gifActions}}/>
            </div>
        )
    }
}