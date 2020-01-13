import React from 'react';
import { Spin } from 'antd';
import './index.less';

const Loading = (props) => {
  if (props.error) {
    return <div>{JSON.stringify(props.error)}<button onClick={ props.retry }>Retry</button></div>
  } else if (props.pastDelay) {
    return <div className="loading-wrap"><Spin /></div>
  } else {
    return null;
  }
}

export default Loading;
