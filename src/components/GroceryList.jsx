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
    // if (!this.state.receivedData) {
    //   console.log(this.props);
    //   this.updateIngredients();
    // }
  }
  
  componentDidMount() {
    this.combinedIngredients();
  }

  // updateIngredients = () => {
  //   if (this.props.recipes.length > 0) {
  //     this.combinedIngredients();
  //     this.setState({ receivedData: true });
  //   }
  // };

  toggleCompleted = index => {
    const ingredients = this.state.ingredients;

    // if the item is marked as completed, make it false
    if (ingredients[index].completed) {
      ingredients[index].completed = false;
    } else {
      ingredients[index].completed = true;
    }

    // update ingredient state in app.js
    this.setState({ ingredients });

    // this.setState({ ingredients });
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
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GroceryList;
