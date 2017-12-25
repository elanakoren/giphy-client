import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gifActions from '../actions/actions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GifList} from './gifList';
    class GifListContainer extends Component {
    static propTypes = {
        gifActions: PropTypes.object.isRequired,
        gifs: PropTypes.object,
    };

    componentWillMount() {
        this.props.gifActions.fetchGifs()
    }

    render() {
        const {gifs} = this.props;
        let gifList;

        if (gifs.data && gifs.data.length > 0) {
            gifList = (<GifList gifData={gifs.data}/>);
        }

        return (
            <div>
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