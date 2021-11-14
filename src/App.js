import Header from './COMPONENTS/Header'
import Hero from './COMPONENTS/Hero'
import About from './COMPONENTS/About'
import Exp from './COMPONENTS/Exp'
import Projects from './COMPONENTS/Projects'
import Contact from './COMPONENTS/Contact'
import Footer from './COMPONENTS/Footer'
import { useState, useEffect } from 'react'

import { BsArrowUpSquare } from 'react-icons/bs'

function App() {

  const [showArrow, setShowArrow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowArrow(true)
      } else {
        setShowArrow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', {})
    }
  }, [])


  return (
    <div className="App text-indigo-50 font-semibold">
      <div id="container"
        className="w-11/12 md:w-10/12 mx-auto"
      >
        <a> <BsArrowUpSquare
          onClick={() => {
            document.getElementById('Header').scrollIntoView({ behavior: 'smooth' })
          }}
          className={`sticky float-right hidden md:inline transform md:translate-x-12 transition-all ease-in-out top-full z-40 ${showArrow ? 'opacity-100' : 'opacity-0'}`}
          style={{ top: '90%' }}
          size={40} /></a>
        <Header />
        <Hero />
        <About />
        <Exp />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
