import React from 'react'
import Navbar from './components/layout/navbar.jsx'
import Hero from './components/sections/Hero.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar/>
       <main>
          <Hero/>
       </main>
    </div>
  )
}

export default App
