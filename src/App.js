import Header from './COMPONENTS/Header'
import Hero from './COMPONENTS/Hero'
import About from './COMPONENTS/About'
import Exp from './COMPONENTS/Exp'
import Projects from './COMPONENTS/Projects'
import Contact from './COMPONENTS/Contact'
function App() {
  return (
    <div className="App text-indigo-50 font-semibold">
      <div id="container"
        className="w-10/12 2xl:w-9/12 mx-auto"
      >
        <Header />
        <Hero />
        <About />
        <Exp />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
