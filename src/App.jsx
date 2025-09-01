import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Recipes from './Components/Recipes/Recipes'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <HowItWorks/>
      <Recipes/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
