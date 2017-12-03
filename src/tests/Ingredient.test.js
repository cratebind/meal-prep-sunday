import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from '../components/Ingredient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const exampleIngredient = {
    aisle: 'Pasta and rice',
    completed: false,
    ingredientKey: 0,
    ingredientName: 'Alfredo Sauce'
  }
  ReactDOM.render(
    <Ingredient
      ingredient={exampleIngredient}
      onClick={() => console.log('Success')}
    />, div);
});
