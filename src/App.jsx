import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.section-fade').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#0F172A' }}>
      {/* Background effects - subtle blue glow */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div 
        className="fixed pointer-events-none"
        style={{ 
          top: '10%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'rgba(59, 130, 246, 0.08)',
          filter: 'blur(150px)',
          borderRadius: '50%'
        }}
      />
      <div 
        className="fixed pointer-events-none"
        style={{ 
          bottom: '10%',
          right: '20%',
          width: '400px',
          height: '400px',
          background: 'rgba(56, 189, 248, 0.06)',
          filter: 'blur(140px)',
          borderRadius: '50%'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App