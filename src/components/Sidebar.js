import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Sidebar extends Component {
  render() {
    return (
      <ul className="tabs">
        <li className="tab">
          <a href="#new-recipe" id="new-recipe-button" className="active">
            Add New Recipe
            <i className="material-icons">add</i>
          </a>
        </li>
        <ReactCSSTransitionGroup
          transitionName="add-recipe"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}
        >
          {Object.keys(this.props.recipes).map(key => {
            return (
              <li className="tab" key={key}>
                <a
                  href={`#${key}`}
                  onClick={() => this.props.changeRecipe(key)}
                >
                  {this.props.recipes[key].name}
                </a>
              </li>
            );
          })}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}

export default Sidebar;
