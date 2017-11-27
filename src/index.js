import React from 'react';
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

const Root = () => {
  return (
    <Router basename="/meal-prep-sunday/">
      <div>
        {/* Path to main app page */}
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={LoginPage} />
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'));
