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
    bulkAddMode: false
  }

  createRecipe(event) {
    event.preventDefault();
    console.log('Creating Recipe');

    let newRecipeIngredients;

    if (this.state.bulkAddMode) {
      newRecipeIngredients = this.bulkAddInput.value.split('\n');
    } else {
      newRecipeIngredients = this.state.ingredients;
    }

    const newRecipe = {
      name: this.recipeName.value,
      ingredients: newRecipeIngredients,
    }

    if (newRecipe.name && newRecipe.ingredients) {
      this.props.addRecipe(newRecipe);
      this.recipeName.value = '';
      this.setState({
        ingredients: []
      })
    }
  }

  addIngredient(event) {
    event.preventDefault();

    if (this.newIngredient.value !== '') {
      const ingredients = this.state.ingredients;
      
      ingredients.push(this.newIngredient.value);
  
      this.setState({ ingredients });
  
      this.newIngredient.value = '';
    }
  }

  toggleBulkAdd = (e) => {
    e.preventDefault();
    this.setState({ bulkAddMode: !this.state.bulkAddMode })
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
                {
                  !this.state.bulkAddMode &&
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
                }
                {
                  this.state.bulkAddMode &&
                    <div
                      className="input-field col s12"
                      id="paste-recipe-input"
                    >
                      <textarea
                        className="materialize-textarea"
                        id="paste-recipe-textarea"
                        ref={(input) => this.bulkAddInput = input}
                        placeholder="Enter Ingredients (Items separated by line breaks)"
                      />
                    </div>
                }
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
                  })
                }
                </ul>
                <div className="col s12 add-recipe-button-row">
                  <button
                    className="btn waves-effect waves-light"
                    id="save-recipe-button"
                  >
                    Save
                  </button>
                  <button
                    className="btn waves-effect waves-light"
                    id="paste-recipe-button"
                    onClick={(e) => this.toggleBulkAdd(e)}
                  >
                    Bulk Add Items
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
