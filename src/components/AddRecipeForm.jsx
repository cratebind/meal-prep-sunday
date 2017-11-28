import React, { Component } from 'react';
import Ingredient from './Ingredient';

class AddRecipeForm extends Component {
  constructor() {
    super();

    this.createRecipe = this.createRecipe.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }

  state = {
    ingredients: [],
  }

  createRecipe(event) {
    event.preventDefault();
    console.log('Creating Recipe');

    const newRecipe = {
      name: this.recipeName.value,
      ingredients: this.state.ingredients,
    }
    
    if (newRecipe.name && newRecipe.ingredients) {
      this.props.addRecipe(newRecipe);
    }
  }

  addIngredient(event) {
    event.preventDefault();

    const ingredients = this.state.ingredients;

    ingredients.push({
      completed: false,
      ingredientName: this.newIngredient.value 
    });

    this.setState({ ingredients });

    this.newIngredient.value = '';
  }

  render() {
    if (this.props.activeRecipe === -1) {
      return (
        <div id="new-recipe" className="col s12 active">
          <form onSubmit={(e) => this.createRecipe(e)}>
            <div className="row">
              <div className="input-field col s12 m6">
                <label>Recipe Name</label>
                <input ref={(input) => this.recipeName = input} type="text" />
              </div>
            </div>
  
            <div className="row">
              <div className="col s12 m6">
                <label htmlFor="chips">Ingredients</label>
                <div className="add-ingredient-row">
                  <input ref={(input) => this.newIngredient = input} type="text" placeholder="Enter Ingredients"/>
                  <button
                      className="btn waves-effect waves-light"
                      id="add-ingredient-button"
                      onClick={(e) => this.addIngredient(e)}
                    >
                    Add
                  </button>
                </div>
                <ul className="collection">
                {
                  this.state.ingredients.map((ingredient, index) => {
                    return (
                      <Ingredient
                        ingredient={ingredient}
                        onClick={() => this.toggleCompleted(index)}
                        key={index}
                      />
                    )
                    // <li key={index} className="collection-item">{ingredient}</li>
                  })
                }
                </ul>
                <div
                  className="input-field col s12 hide"
                  id="paste-recipe-input"
                >
                  <textarea
                    className="materialize-textarea"
                    id="paste-recipe-textarea"
                    placeholder="Paste Your Recipe Here"
                  />
                </div>
                <div className="col s12 add-recipe-button-row">
                  <button
                    className="btn waves-effect waves-light"
                    id="save-recipe-button"
                    type="submit"
                    name="action"
                  >
                    Save
                  </button>
                  <button
                    className="btn waves-effect waves-light"
                    id="paste-recipe-button"
                  >
                    Paste Recipe
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
    return null
  }
}

// AddRecipeForm.propTypes = {
//   addRecipe: React.PropTypes.func
// }

export default AddRecipeForm;
