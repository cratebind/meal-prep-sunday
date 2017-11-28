import React from 'react';
import { Link } from 'react-router-dom'

class AppBar extends React.Component {
  render() {
    function NavLinks(props) {
      if (props.user) {
        return (
          <ul className="right hide-on-med-and-down">
            <li><a onClick={() => props.logout()}>Log Out</a></li>
          </ul>
        )
      } else {
        return (
          <ul className="right hide-on-med-and-down">
            <li><a href="/register">Sign Up</a></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        )
      }
    }
    
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <a id="logo-container" href="/" className="brand-logo">Meal Prep Sunday</a>
          <NavLinks logout={this.props.logout} user={this.props.user}/>
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
