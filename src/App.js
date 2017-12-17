import React, {Component} from 'react';
import './App.css';
import GifList from './components/gifList';

class App extends Component {
    render() {
        console.log(process.env)
        return (
            <div className="App">
                <GifList/>
            </div>
        );
    }
}

export default App;
