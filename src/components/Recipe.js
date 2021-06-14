import React from 'react'
import IngredientsList from './IngredientsList';

const Recipe = (props) => {
  console.log(props);
  const {
    id,
    name,
    cookTime,
    instructions,
    servings,
    ingredients,
    handleDeleteRecipe
  } = props;
  return (
    <div className="recipe">
      <header>
        <h3>{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger" onClick={() => handleDeleteRecipe(id)}>Delete</button>
        </div>
      </header>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__value--instructions">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientsList ingredients={ingredients} />
        </div>
      </div>
    </div >
  )
}

export default Recipe
