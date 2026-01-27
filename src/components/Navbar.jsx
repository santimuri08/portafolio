import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navLinks.map((link) => link.href.substring(1))
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: isScrolled ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid #1F2937' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div 
          className="container" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: isScrolled ? '70px' : '80px', 
            transition: 'height 0.3s ease' 
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              fontFamily: "'Clash Display', sans-serif", 
              textDecoration: 'none' 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span style={{ color: '#3B82F6' }}>SM</span>
            <span style={{ color: 'white' }}>.dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: activeSection === link.href.substring(1) ? '#3B82F6' : '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                  onMouseLeave={(e) => {
                    e.target.style.color = activeSection === link.href.substring(1) ? '#3B82F6' : '#9CA3AF'
                  }}
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.875rem' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ 
                padding: '8px', 
                color: 'white', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px'
            }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: index * 0.08 }}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: activeSection === link.href.substring(1) ? '#3B82F6' : '#E5E7EB',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.5 }}
              className="btn-primary"
              style={{ marginTop: '16px' }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}