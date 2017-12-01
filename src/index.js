import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './index.css';
import App from './App';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import base from './base';

class Root extends Component {
  constructor() {
    super();

    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  state = {
    user: null
  }

  loginUser(user) {
    console.log(user);

    this.setState({ user })
  }

  logout() {
    console.log('logging user out')
    base.unauth();
    this.setState({ user: null });
  }

  render() {
    return (
      <Router>
        <div>
          {/* Path to main app page */}
          <Route exact path='/' render={(props) => (
            <App user={this.state.user} logout={this.logout}/>
          )}/>
          <Route exact path='/login' render={(props) => (
            <LoginPage loginUser={this.loginUser} user={this.state.user} {...props} />
          )}/>
          <Route exact path='/register' render={(props) => (
            <Register loginUser={this.loginUser} user={this.state.user} {...props} />
          )}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
