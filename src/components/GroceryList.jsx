import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Ingredient from './Ingredient';

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      receivedData: false,
    };
  }

  componentDidUpdate() {
    if (!this.state.receivedData) {
      console.log(this.props);
      this.updateIngredients();
    }
  }

  updateIngredients = () => {
    if (this.props.recipes.length > 0) {
      this.combinedIngredients();
      this.setState({ receivedData: true });
    }
  };

  combinedIngredients = () => {
    let combinedIngredients = [];
    this.props.recipes[0].forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        combinedIngredients.push(ingredient);
      });
    });
    this.setState({ ingredients: combinedIngredients });
  };

  render() {
    let sortedIngredients = {};
    this.state.ingredients.forEach(ingredient => {
      ingredient.completed = false;
      if (sortedIngredients[ingredient.aisle] === undefined) {
        sortedIngredients[ingredient.aisle] = [ingredient];
      } else {
        sortedIngredients[ingredient.aisle].push(ingredient);
      }
    });

    return (
      <div>
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
    );
  }
}

export default GroceryList;
