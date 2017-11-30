import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Sidebar extends Component {
  render() {
    return (
      <ul className="tabs">
        <li className="tab sidebar-top-buttons">
          <a
            id="new-recipe-button"
            className="active btn-flat"
            onClick={() => this.props.changeRecipe(-1)}
          >
            Add Recipe
            <i className="material-icons right">add</i>
          </a>
          <a
            id="new-grocery-list"
            className="active btn-flat"
            onClick={() => this.props.groceryListToggle()}
          >
            New List
            <i className="material-icons right">shopping_cart</i>
          </a>
        </li>
        <li className="tab tab-header-section">Grocery Lists</li>
        {this.props.groceryLists.map((groceryList, index) => (
          <li key={index} className="tab">
            <a>Grocery List 1</a>
          </li>
        ))}
        <li className="tab tab-header-section">Recipes</li>
        <ReactCSSTransitionGroup
          transitionName="add-recipe"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {Object.keys(this.props.recipes).map(key => (
            <li className="tab" key={key}>
              <a onClick={() => this.props.changeRecipe(key)}>{this.props.recipes[key].name}</a>
            </li>
          ))}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}

export default Sidebar;
