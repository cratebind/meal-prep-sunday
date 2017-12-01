import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import base from '../base';

class Register extends Component {
  constructor() {
    super();

    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  componentDidMount() {
    base.onAuth((user) => {
      if (user) {
        this.authHandler(null, { user });
        console.log(user);
      }
    });
  }

  authenticate(provider) {
    console.log(`Trying to login with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  register(e) {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const passConfirm = this.passwordConfirm.value;

    if (email && password === passConfirm) {
      base
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          console.log(error);
        });
    }
  }

  authHandler(err, authData) {
    if (err) {
      console.error(err);
      return err;
    }
    // console.log(authData);
    this.props.loginUser(authData.user);
  }

  render() {
    if (!this.props.user) {
      return (
        <div className="login-container">
          <div className="row">
            <div className="col s12">
              <form>
                <div className="card">
                  <div className="card-content">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="validate"
                          ref={input => (this.email = input)}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        name="password"
                        id="password"
                        type="password"
                        className="validate"
                        ref={input => (this.password = input)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="password-confirm"
                        type="password"
                        className="validate"
                        ref={input => (this.passwordConfirm = input)}
                      />
                      <label htmlFor="password-confirm">Confirm Password</label>
                    </div>
                  </div>
                  <div className="card-action">
                    <div className="row">
                      <button
                        className="btn waves-effect waves-light"
                        onClick={e => this.register(e)}
                      >
                        Sign Up
                      </button>
                    </div>
                    <div style={{ marginBottom: 15 }}>
                      <a
                        className="waves-effect waves-light btn social facebook"
                        onClick={() => this.authenticate('facebook')}
                      >
                        <i className="fa fa-facebook" /> Sign in with facebook
                      </a>
                    </div>
                    <div>
                      <a
                        className="waves-effect waves-light btn social google"
                        onClick={() => this.authenticate('google')}
                      >
                        <i className="fa fa-google" /> Sign in with Google
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: this.props.location },
        }}
      />
    );
  }
}

export default Register;
