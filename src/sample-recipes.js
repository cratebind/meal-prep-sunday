const sampleRecipes = [
  {
    _id: { $oid: '5a110030e164db059c247890' },
    name: 'Recipe',
    ingredients: [
      {
        ingredientName: 'eggs',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a110030e164db059c247894' },
      },
      {
        ingredientName: 'milk',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a110030e164db059c247893' },
      },
      {
        ingredientName: 'spinach',
        aisle: 'Produce',
        _id: { $oid: '5a110030e164db059c247892' },
      },
      {
        ingredientName: 'waffles',
        aisle: 'Frozen',
        _id: { $oid: '5a110030e164db059c247891' },
      },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a1122887f4fb01da8f0616a' },
    name: 'New Recipe',
    ingredients: [
      {
        ingredientName: 'salmon',
        aisle: 'Seafood',
        _id: { $oid: '5a1122887f4fb01da8f0616f' },
      },
      { ingredientName: 'tacos', _id: { $oid: '5a1122887f4fb01da8f0616e' } },
      {
        ingredientName: 'salsa',
        aisle: 'Pasta and Rice;Ethnic Foods',
        _id: { $oid: '5a1122887f4fb01da8f0616d' },
      },
      {
        ingredientName: 'chips',
        aisle: 'Savory Snacks',
        _id: { $oid: '5a1122887f4fb01da8f0616c' },
      },
      {
        ingredientName: 'dip',
        aisle: 'Canned and Jarred',
        _id: { $oid: '5a1122887f4fb01da8f0616b' },
      },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a112668e5c0b31cb8e0cb1a' },
    name: 'New User Recipe',
    ingredients: [
      {
        ingredientName: 'fish',
        aisle: 'Seafood',
        _id: { $oid: '5a112668e5c0b31cb8e0cb20' },
      },
      {
        ingredientName: 'milk',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a112668e5c0b31cb8e0cb1f' },
      },
      {
        ingredientName: 'eggs',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a112668e5c0b31cb8e0cb1e' },
      },
      {
        ingredientName: 'orange juice',
        aisle: 'Beverages',
        _id: { $oid: '5a112668e5c0b31cb8e0cb1d' },
      },
      {
        ingredientName: 'tilapia',
        aisle: 'Seafood',
        _id: { $oid: '5a112668e5c0b31cb8e0cb1c' },
      },
      {
        ingredientName: 'turkey',
        aisle: 'Meat',
        _id: { $oid: '5a112668e5c0b31cb8e0cb1b' },
      },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a1126d7ae42ce2210f47752' },
    name: 'new recipe',
    ingredients: [
      {
        ingredientName: 'stew',
        aisle: 'Meat',
        _id: { $oid: '5a1126d7ae42ce2210f47758' },
      },
      {
        ingredientName: 'orange juice',
        aisle: 'Beverages',
        _id: { $oid: '5a1126d7ae42ce2210f47757' },
      },
      {
        ingredientName: 'apple juice',
        aisle: 'Beverages',
        _id: { $oid: '5a1126d7ae42ce2210f47756' },
      },
      {
        ingredientName: 'curry',
        aisle: 'Ethnic Foods',
        _id: { $oid: '5a1126d7ae42ce2210f47755' },
      },
      {
        ingredientName: 'lentils',
        aisle: 'Pasta and Rice;Canned and Jarred',
        _id: { $oid: '5a1126d7ae42ce2210f47754' },
      },
      { ingredientName: 'zebra', _id: { $oid: '5a1126d7ae42ce2210f47753' } },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a112ca013cf3d24d018941a' },
    name: 'new recipe with id',
    author: { $oid: '5a112c7413cf3d24d0189419' },
    ingredients: [
      {
        ingredientName: 'chicken',
        aisle: 'Meat',
        _id: { $oid: '5a112ca013cf3d24d018941f' },
      },
      {
        ingredientName: 'turkey',
        aisle: 'Meat',
        _id: { $oid: '5a112ca013cf3d24d018941e' },
      },
      {
        ingredientName: 'sausage',
        aisle: 'Meat',
        _id: { $oid: '5a112ca013cf3d24d018941d' },
      },
      {
        ingredientName: 'waffle',
        aisle: 'Frozen',
        _id: { $oid: '5a112ca013cf3d24d018941c' },
      },
      { ingredientName: 'gun', _id: { $oid: '5a112ca013cf3d24d018941b' } },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a1131cf1bad5000146058ac' },
    name: 'Tuesday',
    author: { $oid: '5a112c7413cf3d24d0189419' },
    ingredients: [
      {
        ingredientName: 'Potato Chips',
        aisle: 'Savory Snacks',
        _id: { $oid: '5a1131cf1bad5000146058af' },
      },
      {
        ingredientName: 'fruits',
        aisle: 'Produce',
        _id: { $oid: '5a1131cf1bad5000146058ae' },
      },
      {
        ingredientName: 'vegetables',
        aisle: 'Frozen',
        _id: { $oid: '5a1131cf1bad5000146058ad' },
      },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a113a0f317b72001418eff3' },
    name: 'Macaroni and Cheese',
    author: { $oid: '5a112c7413cf3d24d0189419' },
    ingredients: [
      {
        ingredientName: 'Macaroni',
        aisle: 'Pasta and Rice',
        _id: { $oid: '5a113a0f317b72001418eff8' },
      },
      {
        ingredientName: 'Milk',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a113a0f317b72001418eff7' },
      },
      {
        ingredientName: 'Tomato',
        aisle: 'Produce',
        _id: { $oid: '5a113a0f317b72001418eff6' },
      },
      {
        ingredientName: 'Cheese',
        aisle: 'Cheese',
        _id: { $oid: '5a113a0f317b72001418eff5' },
      },
      {
        ingredientName: 'Chicken',
        aisle: 'Meat',
        _id: { $oid: '5a113a0f317b72001418eff4' },
      },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a13c59e345b9f285e74ebfc' },
    name: 'Budget Bytes',
    author: { $oid: '5a112c7413cf3d24d0189419' },
    ingredients: [
      {
        ingredientName: '6 corn tortillas $0.35',
        aisle: 'Bakery/Bread;Pasta and Rice;Ethnic Foods',
        _id: { $oid: '5a13c59e345b9f285e74ec05' },
      },
      {
        ingredientName: '1/2 Tbsp cooking oil $0.01',
        aisle: 'Oil, Vinegar, Salad Dressing',
        _id: { $oid: '5a13c59e345b9f285e74ec04' },
      },
      {
        ingredientName: '2 Tbsp butter $0.26',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a13c59e345b9f285e74ec03' },
      },
      {
        ingredientName: '8 large eggs $2.16',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a13c59e345b9f285e74ec02' },
      },
      {
        ingredientName: '4 oz can diced green chiles $0.69',
        aisle: 'Produce',
        _id: { $oid: '5a13c59e345b9f285e74ec01' },
      },
      {
        ingredientName: '1/4 cup sour cream $0.37',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a13c59e345b9f285e74ec00' },
      },
      {
        ingredientName: '2 oz. queso fresco or Monterey jack $0.57',
        aisle: 'Cheese',
        _id: { $oid: '5a13c59e345b9f285e74ebff' },
      },
      {
        ingredientName: '2 green onions $0.25',
        aisle: 'Produce',
        _id: { $oid: '5a13c59e345b9f285e74ebfe' },
      },
      {
        ingredientName: 'Pinch salt \u0026 pepper $0.05',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a13c59e345b9f285e74ebfd' },
      },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a13c635345b9f285e74ec06' },
    name: 'Budget Bytes Quinoa',
    author: { $oid: '5a112c7413cf3d24d0189419' },
    ingredients: [
      {
        ingredientName: '1 cup uncooked quinoa $1.40',
        aisle: 'Pasta and Rice;Health Foods',
        _id: { $oid: '5a13c635345b9f285e74ec11' },
      },
      {
        ingredientName: '1/4 cup olive oil $0.52',
        aisle: 'Oil, Vinegar, Salad Dressing',
        _id: { $oid: '5a13c635345b9f285e74ec10' },
      },
      {
        ingredientName: '1 Tbsp apple cider vinegar $0.10',
        aisle: 'Oil, Vinegar, Salad Dressing',
        _id: { $oid: '5a13c635345b9f285e74ec0f' },
      },
      {
        ingredientName: '1/2 tsp smoked paprika $0.05',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a13c635345b9f285e74ec0e' },
      },
      {
        ingredientName: '1/4 tsp cumin $0.02',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a13c635345b9f285e74ec0d' },
      },
      {
        ingredientName: '1/8 tsp garlic powder $0.02',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a13c635345b9f285e74ec0c' },
      },
      {
        ingredientName: '1/2 tsp salt $0.02',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a13c635345b9f285e74ec0b' },
      },
      {
        ingredientName: 'Freshly cracked pepper $0.05',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a13c635345b9f285e74ec0a' },
      },
      {
        ingredientName: '15 oz can black beans $0.59',
        aisle: 'Pasta and Rice;Canned and Jarred',
        _id: { $oid: '5a13c635345b9f285e74ec09' },
      },
      {
        ingredientName:
          '2 bell peppers (preferable red, yellow, or orange) $1.98',
        aisle: 'Produce',
        _id: { $oid: '5a13c635345b9f285e74ec08' },
      },
      {
        ingredientName: '2 green onions $0.25',
        aisle: 'Produce',
        _id: { $oid: '5a13c635345b9f285e74ec07' },
      },
    ],
    __v: 0,
  },
  {
    _id: { $oid: '5a17146142af37001481f347' },
    name: 'Wild Rice',
    author: { $oid: '5a11e7de1bbb7600141f308a' },
    ingredients: [
      {
        ingredientName: '4 Tbsp butter $0.52',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a17146142af37001481f357' },
      },
      {
        ingredientName: '1 onion $0.28',
        aisle: 'Produce',
        _id: { $oid: '5a17146142af37001481f356' },
      },
      {
        ingredientName: '2 cloves garlic $0.16',
        aisle: 'Produce',
        _id: { $oid: '5a17146142af37001481f355' },
      },
      {
        ingredientName: '2 carrots $0.22',
        aisle: 'Produce',
        _id: { $oid: '5a17146142af37001481f354' },
      },
      {
        ingredientName: '2 stalks celery $0.37',
        aisle: 'Produce',
        _id: { $oid: '5a17146142af37001481f353' },
      },
      {
        ingredientName: '8 oz. button mushrooms $1.80',
        aisle: 'Produce',
        _id: { $oid: '5a17146142af37001481f352' },
      },
      {
        ingredientName: '1/2 tsp salt $0.02',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a17146142af37001481f351' },
      },
      {
        ingredientName: 'Freshly cracked pepper $0.05',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a17146142af37001481f350' },
      },
      {
        ingredientName: '1/4 tsp dried thyme $0.03',
        aisle: 'Produce;Spices and Seasonings',
        _id: { $oid: '5a17146142af37001481f34f' },
      },
      {
        ingredientName: '1/4 tsp dried sage $0.03',
        aisle: 'Produce;Spices and Seasonings',
        _id: { $oid: '5a17146142af37001481f34e' },
      },
      {
        ingredientName: '4 Tbsp flour $0.04',
        aisle: 'Baking',
        _id: { $oid: '5a17146142af37001481f34d' },
      },
      {
        ingredientName: '1 cup vegetable broth $0.13',
        aisle: 'Canned and Jarred',
        _id: { $oid: '5a17146142af37001481f34c' },
      },
      {
        ingredientName: '1 cup whole milk $0.31',
        aisle: 'Milk, Eggs, Other Dairy',
        _id: { $oid: '5a17146142af37001481f34b' },
      },
      {
        ingredientName: 'salt, to taste $0.02',
        aisle: 'Spices and Seasonings',
        _id: { $oid: '5a17146142af37001481f34a' },
      },
      {
        ingredientName: '4 cups cooked wild rice blend $1.20',
        aisle: 'Pasta and Rice',
        _id: { $oid: '5a17146142af37001481f349' },
      },
      {
        ingredientName: '3 oz. fried onions* $1.75',
        aisle: 'Canned and Jarred',
        _id: { $oid: '5a17146142af37001481f348' },
      },
    ],
    __v: 0,
  },
];

export default sampleRecipes;
