import React, { Component } from 'react';

function LoginMaker(onLogin, logIn) {
  return function Login({ history }) {
    const onSubmit = (e) => {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      logIn(email, password)
        .then((data) => {
          onLogin(data.jwt);
          history.push('/');
        });
    };
    return (<div>
      <h2>Log In</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>);
  };
}

export default LoginMaker;
