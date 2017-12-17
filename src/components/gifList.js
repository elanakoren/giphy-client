import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gifActions from '../actions/actions';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class GifList extends Component {
    static propTypes = {
        gifActions: PropTypes.object.isRequired,
        gifs: PropTypes.array,
    };

    componentWillMount() {
        this.props.gifActions.fetchGifs();
    }

    renderGifs() {
        const gifUrls = this.props.gifs.data.map(gif => {
           return <span>{gif.url}</span>
        });
        return <div>{gifUrls}</div>;
    }

    render() {
        return (
            <div>
                {this.props.gifs.data && this.props.gifs.data.length > 0 ?
                    this.renderGifs() : null}
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
)(GifList);