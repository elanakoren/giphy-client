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

export class GifListContainer extends Component<Props> {
    componentWillMount() {
        this.props.gifActions.fetchGifs()
    }

    render() {
        const {gifs, gifActions} = this.props;
        let gifList;

        const gifDataAvailable = (gifs.data && gifs.data.length > 0);

        if (gifDataAvailable && gifs.order === 'asc') {
            gifs.data.sort(sortByDateAscending);
            gifList = (<GifList gifData={gifs.data}/>);
        }

        else if (gifDataAvailable) {
            gifs.data.sort(sortByDateDescending);
            gifList = (<GifList gifData={gifs.data}/>);
        }

        return (
            <div>
                <Toolbar {...{gifActions}}/>
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