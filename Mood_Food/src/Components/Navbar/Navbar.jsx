import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="container">
        <h1>MoodFood</h1>

        {/* Hamburger toggle */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
