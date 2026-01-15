import React from 'react'
import Navbar from './components/layout/navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      <Navbar/>
       <main>
          <Hero/>
          <About />
       </main>
    </div>
  )
}

export default App
