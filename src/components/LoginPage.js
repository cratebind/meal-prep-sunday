import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="row">
          <div className="col s12">
            <form>
              <div className="card">
                <div className="card-content">
                  <div className="row">
                    <div className="input-field col s12">
                      <input name="email" id="email" type="email" className="validate" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="input-field col s12">
                    <input name="password" id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                  </div>            
                </div>
                <div className="card-action">
                  <div className="row">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
                  </div>
                  <div className="row">
                    <a className="waves-effect waves-light btn-flat center-align" href="/users/register">Sign Up</a>
                  </div>
                  <div style={{marginBottom: 15}}>
                    <a className="waves-effect waves-light btn social facebook" href="/auth/facebook">
                      <i className="fa fa-facebook" /> Sign in with facebook
                    </a>
                  </div>
                  <div>
                    <a className="waves-effect waves-light btn social google disabled">
                      <i className="fa fa-google" /> Sign in with Google
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;
