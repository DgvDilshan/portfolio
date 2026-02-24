import React from 'react'
import Navbar from './components/layout/navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Services from './components/sections/Services.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar/>
       <main>
          <Hero/>
          <About />
          <Skills />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
       </main>
       <Footer />
    </div>
  )
}

export default App
