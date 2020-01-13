import React from 'react';
import ReactDOM from 'react-dom';
import './common/fonts/iconfont';
import './common/fonts/iconfont.css';
import { StoreProvider } from './store';
import router from './router';

import './common/common.less';

ReactDOM.render(
	<StoreProvider>
		{ router }
	</StoreProvider>,
	document.getElementById('app')
)
