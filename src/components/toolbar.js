// @flow
import React, {Component} from 'react';
import {SortBar} from './sortBar';
import {Search} from './search';
import {ResultCount} from './resultCount';

type Props = {
    gifActions: Object,
    resultCount: number
};

export class Toolbar extends Component<Props> {
    props: Props;

    render() {
        const {gifActions, resultCount} = this.props;
        return (
            <div className="toolbar-grid">
                <ResultCount {...{resultCount}}/>
                <Search {...{gifActions}}/>
                <SortBar {...{gifActions}}/>
            </div>
        )
    }
}