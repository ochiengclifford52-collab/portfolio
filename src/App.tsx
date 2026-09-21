import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import LearningJourney from './components/LearningJourney'
import ProfessionalJourney from './components/ProfessionalJourney'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Goals from './components/Goals'
import GitHubSection from './components/GitHubSection'
import Contact from './components/Contact'
import StatsDashboard from './components/StatsDashboard'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {/* Skip link — visible only when focused via keyboard */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <LearningJourney />
        <ProfessionalJourney />
        <Projects />
        <StatsDashboard />
        <Experience />
        <Education />
        <Certifications />
        <Goals />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}