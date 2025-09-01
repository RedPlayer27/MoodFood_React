import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <h1>MoodFood</h1>
        <p>Feel-good meals made simple</p>
        <a href="#recipes" className="hero-btn">Find My Mood Meal</a>
      </div>
    </section>
  )
}

export default Hero
