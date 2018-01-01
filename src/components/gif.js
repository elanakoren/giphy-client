// @flow
import React, {Component} from 'react';
import GifDetails from './gifDetails';

type Props = {
    imgSrc: string,
    title: string,
    username: string,
    import_datetime: string,
};

type State = {
  expanded: boolean
};

export class Gif extends Component<Props, State> {
    props: Props;
    state: State;

    constructor(props: Props) {
        super();
        this.state = {expanded: false};
    }

    onGifClick() {
        const {expanded} = this.state;
        this.setState({expanded: !expanded});
    }

    componentWillReceiveProps() {
        this.setState({expanded: false})
    }

    render() {
        const {imgSrc, title, username, import_datetime} = this.props;
        const {expanded} = this.state;
        let showGifDetails = expanded ? 'show-details' : 'hide-details';
        let expandGif = expanded ? 'expanded' : '';
        return (
            <div className="grid-cell">
                <img
                    alt=""
                    className={`gif ${expandGif}`}
                    src={imgSrc}
                    onClick={() => this.onGifClick()}/>
                <GifDetails {...{title, username, showGifDetails, import_datetime}}/>
            </div>);
    }
}