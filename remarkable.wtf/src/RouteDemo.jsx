import React, { Component } from 'react';

function delay(t = 2000) {
  return new Promise(resolve => setTimeout(resolve, t));
}

const usersDB = {
  vicki: 'Vicki Anastassiou',
  chandra: 'Chandra Musterer',
  connie: 'Connie Chou',
};

const getUser = userName => delay()
  .then(() => usersDB[userName]);

class RouteDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.loadUser(this.props.match.params.name);
  }
  componentWillReceiveProps({ match: { params: { name } } }) {
    if (this.props.match.params.name !== name) {
      this.setState({ loading: true });
      this.loadUser(name);
    }
  }
  loadUser(name) {
    getUser(name)
      .then((user) => {
        console.log(user);
        this.setState({ user, loading: undefined });
      });
  }
  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    return <h2>Hi, {this.state.user}</h2>;
  }
}
export default RouteDemo;
