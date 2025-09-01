import React from 'react'
import './About.css'
import moodfood from '../../assets/images2/hand-drawn-ramen-illustration_52683-155589.jpg'

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>About MoodFood</h2>
          <p>
            MoodFood is a smart food website that helps you discover meals 
            tailored to your emotions. Each recipe uses no more than 10 simple 
            ingredients you already know and trust. Whether you’re feeling tired, 
            excited, or need comfort, MoodFood makes eating the right dish easy 
            and fun.
          </p>
        </div>
        <div className="about-illustration toni1" >
          {/* Placeholder image — replace with illustration or icon set */}
          <img 
            src={moodfood}
            alt="MoodFood concept illustration"
          />
        </div>
      </div>
    </section>
  )
}

export default About
