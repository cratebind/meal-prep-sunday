import React, { Component } from 'react';
import Recipe from './Recipe';

class GroceryListForm extends Component {
  render() {
    return (
      <div className={`grocery-list-form ${this.props.active}`}>
        <ul className="collection">
          {
            this.props.recipes.map(recipe => {
              return (
                <li className="collection-item">
                  <input type="checkbox" className="filled-in" id={`filled-in-box-${recipe.key}`} />
                  <label htmlFor={`filled-in-box-${recipe.key}`}></label>
                  <div>{recipe.name}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default GroceryListForm;