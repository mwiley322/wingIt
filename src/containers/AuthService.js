import Auth0Lock from 'auth0-lock';
import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
const ID_TOKEN_KEY = 'id_token';
var currentUser;
import $ from 'jquery';

var options = {auth: {
  redirectUrl: `${window.location.origin}`,
  responseType: 'token',
  params: {scope: 'openid profile'}}
}

const lock = new Auth0Lock('e6bP6BJDXyIOep18Q18PtpGGDXCFm8iL', 'mwiley322.auth0.com', options);


lock.on('authenticated', authResult => {
  setIdToken(authResult.idToken);
  var data = {
    idFromAuth0: authResult.idTokenPayload.user_id,
    username: authResult.idTokenPayload.username,
    dateJoined: authResult.idTokenPayload.created_at,
    imageUrl: authResult.idTokenPayload.picture,
    email: authResult.idTokenPayload.email
  };
  currentUser = checkForExistingUser(data);
  browserHistory.push('/profile');
});


export function createUser(data) {
  var url = 'http://localhost:3001/api/users/';
  $.post(url, data, function(res) {
    console.log('posted response from DB: ', res);
    return res;
  });
}

export function checkForExistingUser (data) {
  var url = ('http://localhost:3001/api/users/' + data.idFromAuth0);
  return $.getJSON(url).then(function(res) {
    if (res.length === 1) {
      currentUser = res;
      console.log('IM THE CURRENT USER: ',currentUser);
    } else {
      currentUser = createUser(data);
    }
  });
}


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
  console.log('now logged out');
  location.reload();
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
