import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Sidebar extends Component {
  render() {
    return (
      <ul className="tabs">
        <li className="tab">
          <a id="new-recipe-button" className="active" onClick={() => this.props.changeRecipe(-1)}>
            Add New Recipe
            <i className="material-icons">add</i>
          </a>
        </li>
        <ReactCSSTransitionGroup
          transitionName="add-recipe"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {Object.keys(this.props.recipes).map(key => {
            return (
              <li className="tab" key={key}>
                <a
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
