import React, { Component } from 'react';
import './App.css';
import base from './base';
// import sampleRecipes from './sample-recipes';

// material UI components
import AppBar from './components/AppBar';

// custom React components
import Recipe from './components/Recipe';
import Sidebar from './components/Sidebar';
import AddRecipeForm from './components/AddRecipeForm';

class App extends Component {
  constructor() {
    super();

    this.changeRecipe = this.changeRecipe.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  state = {
    recipes: [],
    activeRecipe: -1,
    recipeView: 'active'
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`user-1/recipes`, {
      context: this,
      state: 'recipes',
      asArray: true
    });
  }

  changeRecipe(newRecipe) {
    // change active recipe
    this.setState({ activeRecipe: parseInt(newRecipe) });
    
    // change view to recipe on mobile
    this.toggleView();
  }

  addRecipe(newRecipe) {
    console.log(newRecipe);

    const recipes = this.state.recipes;

    recipes.push(newRecipe);

    this.setState({ recipes });
  }

  removeRecipe(recipeIndex) {
    if (recipeIndex) {
      const recipes = this.state.recipes;
  
      recipes.splice(recipeIndex, 1);
  
      this.setState({ recipes });
    }
  }

  toggleView() {

    let recipeView;

    if (this.state.recipeView == 'active') {
      recipeView = 'inactive';
    } else {
      recipeView = 'active';
    }

    this.setState({ recipeView: recipeView });
  }

  render() {
    return (
      <div>
        <AppBar />
        <div className="App">
          <div className="fluid-container">
            <div className={`row main-view ${this.state.recipeView}`}>
              <div className="col s12 m3 tab-section">
                <Sidebar
                  recipes={this.state.recipes}
                  changeRecipe={this.changeRecipe}
                />
              </div>
              <div className="col s12 m9 content-section">
                <div className="tab-view-button" onClick={() => this.toggleView()}>
                  <i className="material-icons">arrow_back</i>
                  <div>Back</div>
                </div>
                <AddRecipeForm
                  addRecipe={this.addRecipe}
                  activeRecipe={this.state.activeRecipe}
                />
                {Object.keys(this.state.recipes).map(key => (
                  <Recipe
                    key={key}
                    index={parseInt(key)}
                    activeRecipe={this.state.activeRecipe}
                    recipe={this.state.recipes[key]}
                    changeRecipe={this.changeRecipe}
                    removeRecipe={this.removeRecipe}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
