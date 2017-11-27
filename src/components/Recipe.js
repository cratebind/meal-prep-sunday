import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

class Recipe extends Component {
  constructor(props) {
    super(props)

    this.toggleCompleted = this.toggleCompleted.bind(this);

    this.state = {
      ingredients: this.props.recipe.ingredients
    }
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
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>
                    {details.name}
                  </h4>
                </li>
                <ReactCSSTransitionGroup
                  transitionName="ingredient-list"
                  transitionEnterTimeout={400}
                  transitionLeaveTimeout={400}
                >
                {
                  this.props.recipe.ingredients.map((ingredient, index) => {
                    if (!ingredient.completed) {
                      return (
                        <li className="collection-item" key={index} onClick={() => this.toggleCompleted(index) }>
                          {ingredient.ingredientName}
                        </li>
                      )
                    }
                    return null
                  })
                }
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
                        <li className="collection-item" key={index} onClick={() => this.toggleCompleted(index) }>
                          {ingredient.ingredientName}
                        </li>
                      )
                    }
                    return null;
                  })
                }
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

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  activeRecipe: PropTypes.number.isRequired
}

export default Recipe;
