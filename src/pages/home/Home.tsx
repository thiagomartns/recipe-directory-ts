import React from 'react'
import RecipeList from '../../components/recipeList/RecipeList';
import useFetch from '../../hooks/useFetch'
import './home.scss'

interface RecipeInfo {
  id: number;
  title: string;
  cookingTime: string;
  method: string;
}

const Home = () => {

  const { data, isPending, error } = useFetch<RecipeInfo[]>('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data &&
        <RecipeList recipes={data} />
      }
    </div>
  )
}

export default Home