import React, { useState } from 'react'
import recipes from '../../data/recipes1.js'
import './Recipes.css'



function Recipes() {
  const [selectedMood, setSelectedMood] = useState(null)

  // filter recipes by mood when a mood is selected
  const filteredRecipes = selectedMood
    ? recipes.filter(recipe => recipe.mood === selectedMood)
    : []

  return (
    <section id="recipes" className="recipes">
      <div className="container">
        <h2>Pick Your Mood</h2>

        {/* Mood Buttons */}
        <div className="mood-buttons">
  {[...new Set(recipes.map(r => r.mood))].map(mood => (
    <button
      key={mood}
      onClick={() => setSelectedMood(mood)}
      className={`mood-btn ${selectedMood === mood ? 'active' : ''}`}
    >
      {mood}
    </button>
  ))}
</div>

        {/* Recipe Display */}
<div className="recipe-list">
  {filteredRecipes.length > 0 ? (
    filteredRecipes.map(recipe => (
      <div key={recipe.id} className="recipe-card">
        <h3>{recipe.name}</h3>
        
        <div className="recipe-section">
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h4>Method</h4>
          <p>{recipe.method}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="placeholder">Select a mood to see recipes</p>
  )}
</div>
      </div>
    </section>
  )
}

export default Recipes
