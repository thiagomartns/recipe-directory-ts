import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './recipe.scss';

interface SingleRecipeData {
  title: string;
  cookingTime: string;
  ingredients: string[];
  method: string;
}

const Recipe = () => {

  const { id } = useParams<{ id: string }>()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data: recipe } = useFetch<SingleRecipeData>(url)

  return (
    <div className='recipe'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && 
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      }
    </div>
  )
}

export default Recipe