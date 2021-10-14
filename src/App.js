import Header from './COMPONENTS/Header'
import Hero from './COMPONENTS/Hero'
import About from './COMPONENTS/About'
function App() {
  return (
    <div className="App text-indigo-50">
      <div id="container"
        className="w-10/12 2xl:w-9/12 mx-auto"
      >
        <Header />
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App
