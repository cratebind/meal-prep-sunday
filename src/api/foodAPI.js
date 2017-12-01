const axios = require('axios');
const querystring = require('querystring');

axios.defaults.headers.post['X-Mashape-Key'] = 'hiDNPnZIZ5mshn7mb4HvG6dtL0NZp1P4wUujsnE9Ch9dOsWVF2';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = 'application/json';

// let testIngredients = ['cheese', 'beef', 'broccoli'];

function bulkRequest(items) {
  return new Promise((resolve, reject) => {
    const promises = items.map((item, index)=> {
      return new Promise((resolve, reject) => {
        var params = querystring.stringify({ ingredientList: item });
        
        axios.post('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/parseIngredients?includeNutrition=false', params)
          .then((resp) => {
            debugger
            var aisle = resp.data[0] ? resp.data[0].aisle : 'N/A'
            resolve({
              ingredientName: item,
              aisle: aisle,
              completed: false,
              ingredientKey: index
            });
          })
          .catch(err => {
            reject(err);
          });
      })
    });

    Promise.all(promises).then(result => {
      resolve(result);
    })
      .catch((error) => {
        reject(error);
      });
  })
}

const foodAPI = {
  getAisle(ingredients) {
    return new Promise((resolve, reject) => {
      bulkRequest(ingredients).then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};

// foodAPI.getAisle(testIngredients);

export default foodAPI;
