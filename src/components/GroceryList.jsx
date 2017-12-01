import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Ingredient from './Ingredient';

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.combinedIngredients = this.combinedIngredients.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted = (index, ingredient) => {

    const recipes = this.props.recipes;

    // if the item is marked as completed, make it false
    if (recipes[index].completed) {
      recipes[index].completed = false;
    } else {
      recipes[index].completed = true;
    }

    const recipeIndex = this.props.index.replace('g', '');

    // update ingredient state in app.js
    this.props.updateGroceryList(recipes, recipeIndex);
  };

  combinedIngredients = () => {
    let combinedIngredients = [];
    this.props.recipes[0].forEach(recipe => {
      recipe.ingredients.forEach((ingredient, index) => {
        combinedIngredients.push(ingredient);
      });
    });

    combinedIngredients.forEach((ingredient, index) => {
      ingredient.key = index;
    })

    return combinedIngredients;
  };

  render() {
    let sortedIngredients = {};
    this.props.recipes.forEach(ingredient => {
      if (sortedIngredients[ingredient.aisle] === undefined) {
        sortedIngredients[ingredient.aisle] = [ingredient];
      } else {
        sortedIngredients[ingredient.aisle].push(ingredient);
      }
    });

    if (this.props.index === this.props.activeRecipe) {
      return (
        <div>
          {Object.keys(sortedIngredients).map((key, index) => {
            return (
              <ul className="collection with-header" key={key}>
                <li className="collection-header">
                  <h4>{key}</h4>
                </li>
                <ReactCSSTransitionGroup
                  transitionName="ingredient-list"
                  transitionEnterTimeout={400}
                  transitionLeaveTimeout={400}
                >
                  {sortedIngredients[key].map((ingredient, index) => {
                    if (!ingredient.completed) {
                      return (
                        <Ingredient
                          ingredient={ingredient}
                          onClick={() => this.toggleCompleted(ingredient.key)}
                          key={ingredient.key}
                        />
                      );
                    }
                    return null;
                  })}
                </ReactCSSTransitionGroup>
              </ul>
            );
          })}
          <div className="row">
            <div className="col s12 m6 completed-container">
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Completed</h4>
                </li>
                <ReactCSSTransitionGroup
                  transitionName="ingredient-list"
                  transitionEnterTimeout={400}
                  transitionLeaveTimeout={400}
                >
                  {this.props.recipes.map((ingredient, index) => {
                    if (ingredient.completed) {
                      return (
                        <Ingredient
                          ingredient={ingredient}
                          onClick={() => this.toggleCompleted(index)}
                          key={index}
                        />
                      );
                    }
                    return null;
                  })}
                </ReactCSSTransitionGroup>
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

export default GroceryList;
