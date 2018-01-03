import React from 'react';

function Register({ onLogin, register, history }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;
    const passwordConfirm = e.target.elements.passwordConfirm.value;
    register(email, name, password, passwordConfirm)
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
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input type="password" className="form-control" name="passwordConfirm" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>);
}


export default Register;
