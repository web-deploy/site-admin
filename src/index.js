import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store';
import router from './router';

ReactDOM.render(
	<Provider {...store}>
		{ router }
	</Provider>,
	document.getElementById('app')
)