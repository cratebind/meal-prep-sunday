import React, { Component } from 'react';
import './App.css';
import base from './base';
// import sampleRecipes from './sample-recipes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/AppBar';
import Recipe from './components/Recipe';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import AddRecipeForm from './components/AddRecipeForm';
import GroceryListForm from './components/GroceryListForm';
import GroceryList from './components/GroceryList';
import foodAPI from './api/foodAPI';

class App extends Component {
  state = {
    recipes: [],
    activeRecipe: -1,
    recipeView: true,
    groceryListView: false,
    groceryLists: []
  };

  componentWillMount() {
    // this runs right before the <App> is rendered
    if (this.props.user) {
      this.ref = base.syncState(`${this.props.user.uid}/recipes`, {
        context: this,
        state: 'recipes',
        asArray: true,
      });
      this.ref = base.syncState(`${this.props.user.uid}/groceryLists`, {
        context: this,
        state: 'groceryLists',
        asArray: true,
      });
    }
  }

  changeRecipe = newRecipe => {
    // change active recipe
    this.setState({ activeRecipe: newRecipe });

    // change view to recipe on mobile
    this.toggleView();
  };

  addRecipe = newRecipe => {
    const recipes = this.state.recipes;

    foodAPI
      .getAisle(newRecipe.ingredients)
      .then(result => {
        newRecipe.ingredients = result;

        recipes.push(newRecipe);

        this.setState({ recipes });

        this.toggleView();
      })
      .catch(error => {
        console.log(error);
      });
  };

  removeRecipe = recipeIndex => {
    if (recipeIndex && this.state.recipes.length > 1) {
      const recipes = this.state.recipes;

      recipes.splice(recipeIndex, 1);

      this.setState({ recipes });

      this.toggleView();
    } else if (this.state.recipes.length === 1) {
      this.setState({ recipes: [] });
      // if they delete the last recipe, set the view to add new recipe
      this.setState({ activeRecipe: -1 });

      this.toggleView();
    }
  };

  updateRecipe = (updatedRecipe) => {
    console.log(updatedRecipe);
    const recipes = this.state.recipes;

    recipes[updatedRecipe.key] = updatedRecipe;
    this.setState({ recipes });
  };

  saveGroceryList = (newGroceryList) => {
    const groceryLists = this.state.groceryLists;
    groceryLists.push(newGroceryList);

    this.setState({ groceryLists});
  }

  // toggle recipe list / detail view on mobile
  toggleView = () => {
    const recipeView = !this.state.recipeView;
    this.setState({ recipeView: recipeView });
  };

  render() {
    const recipeViewStyleClass = this.state.recipeView ? 'active' : 'inactive';
    const groceryListView = this.state.groceryListView ? 'active' : 'inactive';
    if (this.props.user) {
      return (
        <MuiThemeProvider>
          <div>
            <AppBar user={this.props.user} logout={this.props.logout} />
            <div className="App">
              <div className="fluid-container">
                <div className={`row main-view ${recipeViewStyleClass}`}>
                  <div className="col s12 m3 tab-section">
                    <Sidebar
                      recipes={this.state.recipes}
                      groceryLists={this.state.groceryLists}
                      changeRecipe={this.changeRecipe}
                      groceryListToggle={() =>
                        this.setState({ groceryListView: !this.state.groceryListView })
                      }
                    />
                  </div>
                  <div className="col s12 m9 content-section">
                    <div className="tab-view-button" onClick={() => this.toggleView()}>
                      <i className="material-icons">arrow_back</i>
                      <div>Back</div>
                    </div>
                    {
                      this.state.groceryLists.map((groceryList, index) => {
                        return <GroceryList key={index} recipes={this.state.groceryLists} activeRecipe={this.state.activeRecipe} index={`g${index}`}/>
                      })
                    }
                    
                    <AddRecipeForm
                      addRecipe={this.addRecipe}
                      activeRecipe={this.state.activeRecipe}
                    />
                    {Object.keys(this.state.recipes).map(key => (
                      <Recipe
                        key={key}
                        index={key}
                        activeRecipe={this.state.activeRecipe}
                        recipe={this.state.recipes[key]}
                        changeRecipe={this.changeRecipe}
                        removeRecipe={this.removeRecipe}
                        updateRecipe={this.updateRecipe}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <GroceryListForm
              active={groceryListView}
              recipes={this.state.recipes}
              groceryListToggle={() =>
                this.setState({ groceryListView: !this.state.groceryListView })
              }
              saveGroceryList={this.saveGroceryList}
            />
          </div>
        </MuiThemeProvider>
      );
    }

    return (
      <div>
        <AppBar user={this.props.user} logout={this.props.logout} />
        <LandingPage />
      </div>
    );
  }
}

export default App;
