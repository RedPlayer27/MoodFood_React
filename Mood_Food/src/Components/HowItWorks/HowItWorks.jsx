import React from 'react'
import './HowItWorks.css'

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">🎭</div>
            <h3>Pick Your Mood</h3>
            <p>Select how you’re feeling right now.</p>
          </div>
          <div className="step">
            <div className="step-icon">🍽️</div>
            <h3>Get a Recipe</h3>
            <p>We’ll suggest a meal that matches your mood.</p>
          </div>
          <div className="step">
            <div className="step-icon">🛒</div>
            <h3>Cook Simple</h3>
            <p>Make it with 10 or fewer everyday ingredients.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
