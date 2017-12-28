import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gifActions from '../actions/actions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GifList} from './gifList';
import Toolbar from './toolbar';
import {sortByDateDescending, sortByDateAscending} from '../helpers/sortHelper';

class GifListContainer extends Component {
    static propTypes = {
        gifActions: PropTypes.object.isRequired,
        gifs: PropTypes.object,
    };

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

        const options = [{text: 'desc'}, {text: 'asc'}];
        return (
            <div>
                <Toolbar {...{options, gifActions, label: 'Sort by:'}}/>
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