//@flow
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gifActions from '../actions/actions';
import React, {Component} from 'react';
import {GifList} from './gifList';
import Toolbar from './toolbar';
import type {gifData} from '../types';
import {sortByDateAscending, sortByDateDescending} from '../helpers/sortHelper';

type Props = {
    gifActions: Object,
    gifs: gifData
};

/**
 * This is a connected component: it gets the redux state and
 * the action creators so that they can become props
 * for the downstream components. It also gets the
 * sort state (ascending or descending) from the store
 * and sorts the data, so that GifList can display it in the correct order.
 */
export class GifListContainer extends Component<Props> {

    // perform the initial data fetch
    componentWillMount() {
        this.props.gifActions.fetchGifs()
    }

    render() {
        const {gifs, gifActions} = this.props;
        let gifList;

        const gifDataAvailable = (gifs.data && gifs.data.length > 0);
        let resultCount;

        if (gifDataAvailable && gifs.order === 'asc') {
            gifs.data.sort(sortByDateAscending);
            gifList = (<GifList gifData={gifs.data}/>);
            resultCount = gifs.data.length;
        }

        else if (gifDataAvailable) {
            gifs.data.sort(sortByDateDescending);
            gifList = (<GifList gifData={gifs.data}/>);
            resultCount = gifs.data.length;
        }

        return (
            <div>
                <Toolbar {...{gifActions, resultCount}}/>
                {gifList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        gifActions: bindActionCreators(gifActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GifListContainer);