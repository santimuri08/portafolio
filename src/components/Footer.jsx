import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

// Custom icon components for Handshake and Indeed
const HandshakeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 7.5L15 10l-3-3-6.5 6.5L7 15l5-5 3 3 4-4 1.5 1.5V7.5h-3zM21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H3V5h18v14z"/>
  </svg>
)

const IndeedIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.5 1C8.462 1 6 3.462 6 6.5c0 1.855.926 3.495 2.338 4.5H6v12h5V11h.5c3.038 0 5.5-2.462 5.5-5.5S14.538 1 11.5 1zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
  </svg>
)

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/santimuri08', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/santiago-murillo-londono-65b947293/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:santimuri636@gmail.com', label: 'Email' },
  { icon: HandshakeIcon, href: 'https://app.joinhandshake.com/profiles/abbhkd', label: 'Handshake' },
  { icon: IndeedIcon, href: 'https://profile.indeed.com', label: 'Indeed' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <footer style={{ borderTop: '1px solid #1F2937' }}>
      <div className="container">
        {/* Main footer content */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '40px',
            paddingTop: '64px',
            paddingBottom: '40px'
          }}
        >
          {/* Brand column */}
          <div>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              style={{ 
                display: 'inline-block',
                fontSize: '1.5rem', 
                fontWeight: 700, 
                fontFamily: "'Clash Display', sans-serif",
                textDecoration: 'none',
                marginBottom: '16px'
              }}
            >
              <span style={{ color: '#3B82F6' }}>SM</span>
              <span style={{ color: 'white' }}>.dev</span>
            </a>
            <p style={{ 
              color: '#9CA3AF', 
              fontSize: '0.875rem', 
              lineHeight: 1.7, 
              marginBottom: '20px',
              maxWidth: '280px'
            }}>
              Full Stack Web Developer passionate about building responsive, user-centered web applications.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid #1F2937',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    y: -3, 
                    borderColor: 'rgba(59, 130, 246, 0.3)', 
                    color: '#3B82F6' 
                  }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links column */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '20px', fontSize: '1rem' }}>
              Quick Links
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{ 
                    color: '#9CA3AF', 
                    fontSize: '0.875rem', 
                    textDecoration: 'none', 
                    transition: 'color 0.3s ease',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '20px', fontSize: '1rem' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="mailto:santimuri636@gmail.com" 
                style={{ 
                  color: '#9CA3AF', 
                  fontSize: '0.875rem', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
              >
                santimuri636@gmail.com
              </a>
              <a 
                href="tel:+18622850704" 
                style={{ 
                  color: '#9CA3AF', 
                  fontSize: '0.875rem', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
              >
                +1 (862) 285-0704
              </a>
              <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                Belleville, New Jersey
              </p>
            </div>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                padding: '10px 18px',
                borderRadius: '10px',
                background: 'rgba(59, 130, 246, 0.1)',
                color: '#3B82F6',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'background 0.3s ease'
              }}
              whileHover={{ scale: 1.03 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          style={{ 
            paddingTop: '24px',
            paddingBottom: '24px',
            borderTop: '1px solid #1F2937',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <p style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            color: '#6B7280', 
            fontSize: '0.875rem',
            margin: 0
          }}>
            © {new Date().getFullYear()} Santiago Murillo. Made with
            <Heart size={14} style={{ color: '#f87171', fill: '#f87171' }} />
            using React
          </p>

          <motion.button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#9CA3AF',
              fontSize: '0.875rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.3s ease'
            }}
            whileHover={{ y: -2, color: '#3B82F6' }}
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}