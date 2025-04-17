import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import HireMe from './components/HireMe/HireMe'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <HireMe />
      <Footer />
    </>
  )
}

export default App
