import React from 'react'
import Recipe from './Recipe'

const RecipeList = ({ recipes, handleAddRecipe, handleDeleteRecipe }) => {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id} {...recipe} handleDeleteRecipe={handleDeleteRecipe} />
        })
        }
      </div>
      <div className="recipe-btn-container">
        <button className="btn btn--primary" onClick={handleAddRecipe}>Add Recipe</button>
      </div>
    </div>
  )
}

export default RecipeList
