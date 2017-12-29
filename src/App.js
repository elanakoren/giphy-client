// @flow
import React, {Component} from 'react';
import './App.css';
import GifListContainer from './components/gifListContainer';

class App extends Component<{||}> {
    render() {
        return (
            <div className="App">
                <GifListContainer/>
            </div>
        );
    }
}

export default App;
