import React from 'react'
import Ingredient from './Ingredient';

export default function IngredientsList({ ingredients }) {
  const ingredientElems = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  });
  return (
    <div className="ingredient-grid">
      {ingredientElems}
    </div>
  )
}
