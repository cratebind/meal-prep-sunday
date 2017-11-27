import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.toggleCompleted = this.toggleCompleted.bind(this);

    this.state = {
      ingredients: this.props.recipe.ingredients,
    };
  }

  // state = {
  //   ingredients: this.props.recipe.ingredients
  // }

  toggleCompleted(index) {
    const ingredients = this.state.ingredients;

    // if the item is marked as completed, make it false
    if (ingredients[index].completed) {
      ingredients[index].completed = false;
    } else {
      ingredients[index].completed = true;
    }

    this.setState({ ingredients });
  }

  render() {
    const details = this.props.recipe;
    const activeRecipe = this.props.activeRecipe;
    if (this.props.index === activeRecipe) {
      return (
        <div id={details.key} className="ingredient-list">
          <div className="row">
            <div className="col s12 m6">
              <button className="btn btn-danger" onClick={() => this.props.removeRecipe(this.props.index)}>
                Remove Recipe
              </button>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>{details.name}</h4>
                </li>
                <ReactCSSTransitionGroup
                  transitionName="ingredient-list"
                  transitionEnterTimeout={400}
                  transitionLeaveTimeout={400}
                >
                  {this.props.recipe.ingredients.map((ingredient, index) => {
                    if (!ingredient.completed) {
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
