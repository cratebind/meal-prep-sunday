import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

class GroceryListForm extends Component {
  state = {
    checked: false,
    newGroceryList: [],
  }
  
  saveGroceryList = () => {
    this.props.saveGroceryList(this.state.newGroceryList);
    this.props.groceryListToggle();
  }

  addRecipe = (e, newRecipe) => {
    // if the newRecipe is being checked, add it to the array
    if (e.target.checked) {
      const newGroceryList = this.state.newGroceryList;
      newGroceryList.push(newRecipe);
      this.setState({ newGroceryList });
    } else {
      const newGroceryList = this.state.newGroceryList.filter(recipe => recipe.name !== newRecipe.name)
      console.log(newGroceryList);

      this.setState({ newGroceryList });
    }
  }

  render() {
    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
      },
    };

    return (
      <div className={`grocery-list-form ${this.props.active}`}>
        <div className="grocery-list-content">
          <div className="row">
            <i className="material-icons right" onClick={() => this.props.groceryListToggle()}>
              keyboard_arrow_down
            </i>
          </div>
          <h4 className="center-align">Add Items to Your Grocery List</h4>
          <ul className="collection">
            {this.props.recipes.map(recipe => (
              <li className="collection-item" key={recipe.key}>
                <Checkbox
                  onCheck={(e) => this.addRecipe(e, recipe)}
                  style={styles.checkbox}
                  label={recipe.name}
                  recipe={recipe.key}
                  ref={(input) => { this.checkbox = input}}
                />
              </li>
            ))}
          </ul>
          <div className="row">
            <div className="col s6 center-align">
              <a className="btn red darken-1">Clear List</a>
            </div>
            <div className="col s6 center-align">
              <a className="btn" onClick={() => this.saveGroceryList()}>Save List</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroceryListForm;
