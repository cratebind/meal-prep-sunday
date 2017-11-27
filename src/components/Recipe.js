import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    const details = this.props.recipe;
    const activeRecipe = this.props.activeRecipe;
    if (this.props.index === activeRecipe) {
      return (
        <div id={details.key} className="ingredient-list">
          <div className="row">
            <div className="col s12 m6">
              <ul className="collection with-header">
                <li className="collection-header">
                  {details.name}
                </li>
                {
                  this.props.recipe.ingredients.map((ingredient, index) => {
                    return (
                      <li className="collection-item" key={index}>
                        {ingredient.ingredientName}
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="col s12 m6 completed-container">
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Completed</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Recipe;
