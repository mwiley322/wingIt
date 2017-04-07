import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Profile from './components/Profile';
import { browserHistory } from 'react-router';
import {HashRouter, Route} from 'react-router-dom';
import { requireAuth } from './components/AuthService';
import EditPost from './components/EditPost.js';
import AllCities from './components/AllCities';




const Root = () => {
  return (
    <div>
    <HashRouter history={browserHistory}>
      <Route path="/" component={Main}/>
    </HashRouter>
    <HashRouter history={browserHistory}>
      <Route path="/AllCities" component={AllCities}/>
    </HashRouter>
    <HashRouter history={browserHistory}>
      <Route path="/profile" component={Profile} onEnter={requireAuth} />
    </HashRouter>
    <HashRouter history={browserHistory}>
      <Route path="/edit" component={EditPost} onEnter={requireAuth} />
    </HashRouter>
    </div>
  )
}


ReactDOM.render(<Root/>, document.getElementById('root'));
