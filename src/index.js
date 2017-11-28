import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';
import App from './App';
import LoginPage from './components/LoginPage';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

class Root extends Component {
  constructor() {
    super();

    this.loginUser = this.loginUser.bind(this);
  }

  state = {
    user: null
  }

  loginUser(user) {
    console.log(user);

    this.setState({ user })
  }

  render() {
    return (
      <Router>
        <div>
          {/* Path to main app page */}
          <Route exact path='/' component={App} />
          {/* <Route exact path='/login' loginUser={loginUser} component={LoginPage} /> */}
          <Route exact path='/login' render={(props) => (
            <LoginPage loginUser={this.loginUser} />
          )}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
