import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted = index => {
    const recipe = this.props.recipe;

    const toggleIndex = recipe.ingredients.find(ingredient => ingredient.ingredientKey === index)
      .ingredientKey;

    // if the item is marked as completed, make it false
    if (recipe.ingredients[toggleIndex].completed) {
      recipe.ingredients[toggleIndex].completed = false;
    } else {
      recipe.ingredients[toggleIndex].completed = true;
    }

    // update ingredient state in app.js
    this.props.updateRecipe(recipe);

    // this.setState({ ingredients });
  };

  render() {
    const details = this.props.recipe;
    const activeRecipe = this.props.activeRecipe;
    let sortedIngredients = {};

    this.props.recipe.ingredients.forEach(ingredient => {
      if (sortedIngredients[ingredient.aisle] === undefined) {
        sortedIngredients[ingredient.aisle] = [ingredient];
      } else {
        sortedIngredients[ingredient.aisle].push(ingredient);
      }
    });

    if (this.props.index === activeRecipe) {
      return (
        <div id={details.key} className="ingredient-list">
          <div className="row">
            <div className="col s10 offset-s1 m6 recipe-top-buttons">
              <button className="btn">
                Edit
                <i className="material-icons right">edit</i>
              </button>
              <button
                className="btn red darken-1"
                onClick={() => this.props.removeRecipe(this.props.index)}
              >
                Delete
                <i className="material-icons right">delete_forever</i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <h4>{details.name}</h4>
              {Object.keys(sortedIngredients).map((key, index) => {
                // const aisle = sortedIngredients[key];
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
                              onClick={() => this.toggleCompleted(ingredient.ingredientKey)}
                              key={index}
                            />
                          );
                        }
                        return null;
                      })}
                    </ReactCSSTransitionGroup>
                  </ul>
                );
              })}
            </div>
          </div>
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
                  {this.props.recipe.ingredients.map((ingredient, index) => {
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
    }
    // return nothing if recipe isn't active
    return null;
  }
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  activeRecipe: PropTypes.number.isRequired,
};

export default Recipe;
