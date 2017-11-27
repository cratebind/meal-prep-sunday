import React, { Component } from 'react';
import './App.css';
import base from './base';
import sampleRecipes from './sample-recipes';

// material UI components
import AppBar from './components/AppBar';

// custom React components
import Recipe from './components/Recipe';
// import List from './components/List';
import Sidebar from './components/Sidebar';
import AddRecipeForm from './components/AddRecipeForm';

class App extends Component {
  constructor() {
    super();

    this.changeRecipe = this.changeRecipe.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }

  // state = {
  //   recipes: sampleRecipes,
  //   activeRecipe: 0,
  // };

  state = {
    recipes: [],
    activeRecipe: 0,
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
    this.setState({ activeRecipe: newRecipe });
  }

  addRecipe(newRecipe) {
    console.log(newRecipe);

    const recipes = this.state.recipes;

    recipes.push(newRecipe);

    this.setState({ recipes })
  }

  render() {
    return (
      <div>
        <AppBar />
        <div className="App">
          <div className="fluid-container">
            <div className="row main-view">
              <div className="col s12 m3 tab-section">
                <Sidebar
                  recipes={this.state.recipes}
                  changeRecipe={this.changeRecipe}
                />
              </div>
              <div className="col s12 m9 content-section">
                <div className="tab-view-button">
                  <i className="material-icons">arrow_back</i>
                  <div>Back</div>
                </div>
                <AddRecipeForm
                  addRecipe={this.addRecipe}
                />
                {Object.keys(this.state.recipes).map(key => (
                  <Recipe
                    key={key}
                    index={key}
                    activeRecipe={this.state.activeRecipe}
                    recipe={this.state.recipes[key]}
                    changeRecipe={this.changeRecipe}
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
