import React from 'react'
import Navbar from './components/layout/navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Services from './components/sections/Services.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      <Navbar/>
       <main>
          <Hero/>
          <About />
          <Skills />
          <Projects />
          <Services />
       </main>
    </div>
  )
}

export default App
