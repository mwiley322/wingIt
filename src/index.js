import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Profile from './components/Profile';
import { browserHistory } from 'react-router';
import {HashRouter, Route} from 'react-router-dom';
import { requireAuth } from './components/AuthService';



const Root = () => {
  return (
    <div className="container">
    <HashRouter history={browserHistory}>
      <Route path="/" component={Main}/>
    </HashRouter>
    <HashRouter history={browserHistory}>
      <Route path="/profile" component={Profile} onEnter={requireAuth} />
    </HashRouter>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
