// @flow
import React, {Component} from 'react';

type Props = {
    resultCount: ?number
}

export class ResultCount extends Component<Props> {
    props: Props;

    render() {
        const {resultCount} = this.props;
        return (
            <div className="results-count">
                <span className="result">{`${resultCount || 0} result(s) found`}</span>
            </div>
        );
    }
}