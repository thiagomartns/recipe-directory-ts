import React, { FormEvent, useState } from 'react'
import './create.scss';

const Create = () => {

  const [title, setTitle] = useState<string>('')
  const [method, setMethod] = useState<string>('')
  const [cookingTime, setCookingTime] = useState<number | string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(title, method, cookingTime);
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