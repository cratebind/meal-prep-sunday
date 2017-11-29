import React, { Component } from 'react';

class GroceryListForm extends Component {
  render() {
    return (
      <div className={`grocery-list-form ${this.props.active}`}>
        <div className="row">
          <i className="material-icons right" onClick={() => this.props.groceryListToggle()}>
            keyboard_arrow_down
          </i>
        </div>
        <h4>Add Items to Your Grocery List</h4>
        <ul className="collection">
          {this.props.recipes.map(recipe => (
            <li className="collection-item">
              <input type="checkbox" className="filled-in" id={`filled-in-box-${recipe.key}`} />
              <label htmlFor={`filled-in-box-${recipe.key}`} />
              <div>{recipe.name}</div>
            </li>
          ))}
        </ul>
        <div className="row">
          <div className="col s6 center-align">
            <a className="btn red darken-1">Clear List</a>
          </div>
          <div className="col s6 center-align">
            <a className="btn">Save List</a>
          </div>
        </div>
      </div>
    );
  }
}

export default GroceryListForm;
