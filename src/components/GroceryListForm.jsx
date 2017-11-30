import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

class GroceryListForm extends Component {
  state = {
    checked: false,
  }
  
  saveGroceryList() {}

  updateCheck() {
    this.setState(oldState => ({
      checked: !oldState.checked,
    }));
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
          <h4>Add Items to Your Grocery List</h4>
          <ul className="collection">
            {this.props.recipes.map(recipe => (
              <li className="collection-item" key={recipe.key}>
                <Checkbox
                  onCheck={this.updateCheck.bind(this)}
                  style={styles.checkbox}
                  label={recipe.name}
                />
              </li>
            ))}
          </ul>
          <div className="row">
            <div className="col s6 center-align">
              <a className="btn red darken-1">Clear List</a>
            </div>
            <div className="col s6 center-align">
              <a className="btn">Save List</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroceryListForm;
