import React from 'react'
import { Link } from 'react-router-dom'
import './recipeList.scss'

interface RecipeInfo {
  id: number;
  title: string;
  cookingTime: string;
  method: string;
}

interface RecipesProps {
  recipes: RecipeInfo[]
}

const RecipeList = ({ recipes }: RecipesProps) => {
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList