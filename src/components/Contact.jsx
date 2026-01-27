import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react'

// Custom icon components for Handshake and Indeed
const HandshakeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 7.5L15 10l-3-3-6.5 6.5L7 15l5-5 3 3 4-4 1.5 1.5V7.5h-3zM21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H3V5h18v14z"/>
  </svg>
)

const IndeedIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.5 1C8.462 1 6 3.462 6 6.5c0 1.855.926 3.495 2.338 4.5H6v12h5V11h.5c3.038 0 5.5-2.462 5.5-5.5S14.538 1 11.5 1zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
  </svg>
)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'santimuri636@gmail.com', href: 'mailto:santimuri636@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 (862) 285-0704', href: 'tel:+18622850704' },
  { icon: MapPin, label: 'Location', value: 'Belleville, New Jersey', href: null },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/santimuri08' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/santiago-murillo-londono-65b947293/' },
  { icon: HandshakeIcon, label: 'Handshake', href: 'https://app.joinhandshake.com/profiles/abbhkd' },
  { icon: IndeedIcon, label: 'Indeed', href: 'https://profile.indeed.com' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xjgwygdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work <span className="gradient-text">Together</span></h2>
          <div className="section-line" />
          <p className="section-description">
            I'm always interested in new opportunities, exciting projects, and meeting fellow developers.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
          <div className="grid-2" style={{ alignItems: 'start' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: "'Clash Display', sans-serif", color: 'white', marginBottom: '24px' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px',
                      borderRadius: '12px',
                      background: 'rgba(30, 41, 59, 0.3)',
                      border: '1px solid #1F2937',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ x: 4, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                  >
                    <div 
                      style={{ 
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <item.icon style={{ width: '20px', height: '20px', color: '#3B82F6' }} />
                    </div>
                    <div>
                      <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease' }}
                          onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                          onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ color: 'white' }}>{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px' }}>Follow Me</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(30, 41, 59, 0.5)',
                        border: '1px solid #1F2937',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9CA3AF',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.3)', color: '#3B82F6' }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div 
                style={{ 
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ position: 'relative', width: '12px', height: '12px' }}>
                    <span style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: '#4ade80',
                      animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                    }} />
                    <span style={{ position: 'relative', display: 'block', width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                  </span>
                  <span style={{ color: 'white', fontWeight: 600 }}>Available for opportunities</span>
                </div>
                <p className="text-small">
                  Currently seeking entry-level positions and internships in full-stack web development and software engineering.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="glass" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: "'Clash Display', sans-serif", color: 'white', marginBottom: '24px' }}>
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '8px' }}>Your Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '8px' }}>Your Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '8px' }}>Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What's this about?" />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '8px' }}>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." style={{ resize: 'none' }} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      background: isSubmitted ? '#22c55e' : undefined,
                      cursor: isSubmitting ? 'wait' : 'pointer'
                    }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <><Loader2 size={20} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                    ) : isSubmitted ? (
                      <><CheckCircle size={20} /> Message Sent!</>
                    ) : (
                      <><Send size={20} /> Send Message</>
                    )}
                  </motion.button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '16px', color: '#6B7280', fontSize: '0.75rem' }}>
                  I typically respond within 24-48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}