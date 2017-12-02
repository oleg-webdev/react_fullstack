import $ from 'jquery';
import './styles/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
	<Provider store={store}>
    <App/>
	</Provider>,
	document.getElementById('root')
);
