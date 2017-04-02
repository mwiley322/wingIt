import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import App from './components/App';
import SignUpForm from './SignUpForm';

ReactDOM.render(
  <div>
    <App />
    <SignUpForm/>
    <Main/>
  </div>,
  document.getElementById('root')
);
