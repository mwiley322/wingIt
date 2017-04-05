import Auth0Lock from 'auth0-lock';
import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
const ID_TOKEN_KEY = 'id_token';

var options = {auth: {
  redirectUrl: `${window.location.origin}`,
  responseType: 'token',
  params: {scope: 'openid profile'}}
}

const lock = new Auth0Lock('e6bP6BJDXyIOep18Q18PtpGGDXCFm8iL', 'mwiley322.auth0.com', options);


lock.on('authenticated', authResult => {
  setIdToken(authResult.idToken);
  console.log(authResult);
  alert('you are authenticated!');
  browserHistory.push('/profile');
});

export function login(options) {
  lock.show(options);
  return {
    hide() {
      lock.hide();
    }
  }
}

export function logout() {
  clearIdToken();
    alert('you are trying to log out');
    console.log('now logged out');
  browserHistory.replace('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
