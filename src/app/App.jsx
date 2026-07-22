import { useState } from 'react'
import Preloader from '../components/Preloader.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import SkillsRadar from '../components/SkillsRadar.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { Reveal } from '../components/Reveal.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <div className={`min-h-screen bg-navy transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Sidebar />
        <div className="md:pl-20">
          <main className="max-w-6xl mx-auto px-6">
            <Hero />
            <Reveal><About /></Reveal>
            <Reveal><SkillsRadar /></Reveal>
            <Reveal><Experience /></Reveal>
            <Reveal><Education /></Reveal>
            <Reveal><ProjectShowcase /></Reveal>
            <Reveal><Projects /></Reveal>
            <Reveal><Contact /></Reveal>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}