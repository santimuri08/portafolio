import { useEffect, lazy, Suspense } from 'react'

const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certificates = lazy(() => import('./components/Certificates'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

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
      <Suspense fallback={
        <div style={{ 
          background: '#0F172A', 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(59, 130, 246, 0.2)',
            borderTop: '3px solid #3B82F6',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        </div>
      }>
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
      </Suspense>
    </div>
  )
}

export default App
