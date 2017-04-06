import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Profile from './components/Profile';
import { browserHistory } from 'react-router';
import {HashRouter, Route} from 'react-router-dom';
import Cities from './components/Cities';
import { requireAuth } from './containers/AuthService';


const Root = () => {
  return (
    <div>
      <HashRouter history={browserHistory}>
        <Route path="/" component={Main}/>
      </HashRouter>
      <HashRouter history={browserHistory}>
        <Route path="/cities" component={Cities} />
      </HashRouter>
      <HashRouter history={browserHistory}>
        <Route path="/profile" component={Profile} onEnter={requireAuth} />
      </HashRouter>
    </div>
  )
}


ReactDOM.render(<Root/>, document.getElementById('root'));
