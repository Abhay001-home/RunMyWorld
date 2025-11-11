// assets/js/auth.js
const API_URL = 'http://localhost:5000/api';

function getToken() {
  return localStorage.getItem('authToken');
}

function setToken(token) {
  localStorage.setItem('authToken', token);
}

function logout() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

function isLoggedIn() {
  return !!getToken();
}

// Protect pages
if (!isLoggedIn() && !['login.html', 'signup.html', 'index.html'].includes(location.pathname.split('/').pop())) {
  window.location.href = 'login.html';
}