import React from 'react';

class AppBar extends React.Component {
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <a id="logo-container" href="/" className="brand-logo">Meal Prep Sunday</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/users/logout">Log Out</a></li>
            <li><a href="/users/register">Sign Up</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
          <ul id="nav-mobile" className="side-nav center-align">
            <li><a href="#!">User Email</a></li>
            <li><a href="/logout">Log Out</a></li>
            <li><a href="/register">Sign Up</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
          <a data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }
}

export default AppBar;
