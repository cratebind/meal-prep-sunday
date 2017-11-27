import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

class Ingredient extends Component {
  render() {
    const details = this.props.ingredient;
    return (
      <li
        className="collection-item"
        key={details.key}
        onClick={this.props.onClick.bind(this, this.props.onClick)}
      >
        {details.ingredientName ? details.ingredientName : details.name}
      </li>
    );
  }
}

export default Ingredient;
