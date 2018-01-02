// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();
const root = document.getElementById('root');

if (root instanceof Element) {
    ReactDOM.render(<Provider {...{store}}><App/></Provider>, root);
}
registerServiceWorker();
