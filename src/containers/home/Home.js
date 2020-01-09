import React from 'react';
import { observer, inject } from 'mobx-react';
@inject('homeStore')
@observer
export default class Home extends React.Component {
	render() {
		return (
			<div className="helloaa">hello world</div>
		)
	}
}