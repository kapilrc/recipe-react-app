import React, { useState } from 'react';
import '../css/app.css';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleAddRecipe() {
    const newRecipe = {
      id: uuidv4(),
      name: "New recipe",
      servings: 2,
      cookTime: "1.00",
      instructions: "1. This is a new instruction.\n2. Cook well\n3. Eat Well.",
      ingredients: [{
        id: uuidv4(),
        name: 'name 3',
        amount: "Rs. 7"
      },
      {
        id: uuidv4(),
        name: "name",
        amount: "Rs. 4"
      }]
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleDeleteRecipe(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <div className="App">
      <RecipeList recipes={recipes} handleAddRecipe={handleAddRecipe} handleDeleteRecipe={handleDeleteRecipe} />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Maggie",
    servings: 3,
    cookTime: "1.45",
    instructions: "1. This is a test instruction.\n2. Cook well\n3. Eat Well.",
    ingredients: [{
      id: 1,
      name: 'maggie',
      amount: "Rs. 10"
    },
    {
      id: 2,
      name: "masala",
      amount: "Rs. 3"
    },
    {
      id: 3,
      name: "salt",
      amount: "Rs. 1"
    }]
  },
  {
    id: 2,
    name: "Masala Maggie",
    servings: 2,
    cookTime: "1.30",
    instructions: "1. This is a test instruction for Masala Maggie. \n2. Cook well \n3. Eat Well.",
    ingredients: [{
      id: 1,
      name: 'maggie',
      amount: "Rs. 10"
    },
    {
      id: 2,
      name: "masala",
      amount: "Rs. 3"
    },
    {
      id: 3,
      name: "salt",
      amount: "Rs. 1"
    }]
  }
]

export default App;
