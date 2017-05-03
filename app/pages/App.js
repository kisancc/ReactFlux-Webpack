import React, {
    Component
} from 'react';

import ReactDOM from 'react-dom';

import IndexView from './IndexView';

class App extends Component {//定义类名
  constructor() {
    super();
  }


  render() {
    return (

		<IndexView
      Traffic='基本畅通' road1='佳灵路' road2='人民北路' road3='长益路' road4='太升南路'
      amble='缓行4.6' jam='拥堵8.6' ambles='缓行4.6' jams='拥堵8.6' temperature='多云12-20℃'
      TrafficInfo='12123132'
    />

    );
  }
}





ReactDOM.render(<App/>, document.querySelector('#root'));//渲染文件到页面















// 引入页面组件
// import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage';

// ReactDOM.render(<HomePage/>, document.querySelector('#root'));
