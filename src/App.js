// @flow
import React, {Component} from 'react';
import './App.css';
import GifListContainer from './components/gifListContainer';

class App extends Component<{||}> {
    render() {
        if (process.env.REACT_APP_API_KEY === undefined) {
            window.alert('Please run the app with your giphy API key set as an environment variable ("REACT_APP_API_KEY"). See the readme.');
        }
        return (
            <div className="App">
                <GifListContainer/>
            </div>
        );
    }
}

export default App;
