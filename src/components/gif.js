// @flow
import React, {Component} from 'react';
import GifDetails from './gifDetails';

type Props = {
    imgSrc: string,
    title: ?string,
    username: ?string
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

    render() {
        const {imgSrc, title, username} = this.props;
        const {expanded} = this.state;

        return (
            <div className="grid-cell">
                <img className="gif" src={imgSrc} onClick={() => this.onGifClick()}/>
                {expanded && <GifDetails {...{title, username}}/>}
            </div>);
    }
}