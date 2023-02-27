import React, { FormEvent, useRef, useState } from 'react'
import './create.scss';

const Create = () => {

  const [title, setTitle] = useState<string>('')
  const [method, setMethod] = useState<string>('')
  const [cookingTime, setCookingTime] = useState<number | string>('')
  const [newIngredient, setNewIngredient] = useState<string>('')
  const [ingredients, setIngredients] = useState<string[]>([])
  const ingredientInput = useRef<null | HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients);
  }

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients(previIngredients => [...previIngredients, newIngredient])
    }

    setNewIngredient('')
    if (ingredientInput.current) {
      ingredientInput.current.focus();
    }
  }

  return (
    <div className='create'>
      <h2 className="page-title">Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map((i, index) => (
          <em key={index}>{i}, </em>
        ))}</p>

        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type='number' 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  )
}

export default Create