/* eslint-env browser */
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import puppies from './puppies.json';
import PuppyCard from './PuppyCard';
import makeService from './service';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';

function NavBar({ loggedIn }) {
  const links = loggedIn ?
    (<Link to="/logout" className="nav-item nav-link">Log Out</Link>) :
    ([<Link to="/login" className="nav-item nav-link">Log In</Link>,
      <Link to="/register" className="nav-item nav-link">Register</Link>]);

  return (<nav className="navbar navbar-extend-lg navbar-light bg-light" >
    <a className="navbar-brand">Puppies!</a>
    <div className="nav">
      {links}
    </div>
  </nav>);
}

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');

    this.state = {
      loggedIn: !!token,
    };
    this.service = makeService(token);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogin(token) {
    this.service = makeService(token);
    localStorage.setItem('token', token);
    this.setState({ loggedIn: true });
  }
  onLogout() {
    this.service = makeService();
    localStorage.removeItem('token');
    this.setState({ loggedIn: false });
  }
  render() {
    const puppyCards = puppies.map(puppy => <PuppyCard key={puppy.id} puppy={puppy} />);
    return (
      <div>
        <NavBar loggedIn={this.state.loggedIn} />
        <div className="container">
          <Switch>
            <Route
              path="/login"
              render={({ history }) => (<Login
                onLogin={this.onLogin}
                logIn={this.service.logIn}
                history={history}
              />)}
            />
            <Route
              path="/register"
              render={({ history }) => (<Register
                onLogin={this.onLogin}
                register={this.service.register}
                history={history}
              />)}
            />
            <Route
              path="/logout"
              render={({ history }) => <Logout history={history} onLogOut={this.onLogout} />}
            />
            <Route
              path="/"
              render={() => (<div className="row">
                {puppyCards}
              </div>)}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
