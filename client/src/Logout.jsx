import React from 'react';
import { Redirect } from 'react-router-dom';

function Logout({ onLogOut, history }) {
  onLogOut();
  history.push('/');
  return false;
}

export default Logout;
