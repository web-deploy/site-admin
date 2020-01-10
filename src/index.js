import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store';
import router from './router';

import './common/common.less';

ReactDOM.render(
	<Provider {...store}>
		{ router }
	</Provider>,
	document.getElementById('app')
)