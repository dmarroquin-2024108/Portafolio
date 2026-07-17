import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}