import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background blobs - subtle blue */}
      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          top: '20%',
          left: '10%',
          background: 'rgba(59, 130, 246, 0.1)',
          filter: 'blur(100px)',
          borderRadius: '50%',
        }}
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          bottom: '20%',
          right: '15%',
          background: 'rgba(56, 189, 248, 0.08)',
          filter: 'blur(100px)',
          borderRadius: '50%',
        }}
        animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        transition={{ type: 'spring', stiffness: 50 }}
      />

      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
              <span 
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3B82F6',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}
              >
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="heading-xl"
              style={{ color: 'white', marginBottom: '16px' }}
            >
              Hi, I'm <span className="gradient-text">Santiago Murillo Londono </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{ fontSize: '1.25rem', fontWeight: 500, color: '#9CA3AF', marginBottom: '16px' }}
            >
              Entry-Level Full Stack Web & Application Developer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-body"
              style={{ maxWidth: '500px', marginBottom: '32px' }}
            >
              Entry-level Full Stack Web & Application Developer with hands-on experience building
responsive web and mobile applications using HTML, CSS, JavaScript, React, Node.js,
and React Native. Strong foundation in REST APIs, database integration, and modern
development workflows through academic and industry-sponsored projects. Passionate
about building scalable, user-centered solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={18} />
                View My Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px' }}>
              {[
                { icon: Github, href: 'https://github.com/santimuri08', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/santiago-murillo-londono-65b947293/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:santimuri636@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid #1F2937',
                    color: '#9CA3AF',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    y: -4,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    color: '#3B82F6'
                  }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Clean, professional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Subtle glow */}
              <div 
                style={{
                  position: 'absolute',
                  inset: '-30px',
                  background: 'rgba(59, 130, 246, 0.12)',
                  filter: 'blur(60px)',
                  borderRadius: '50%',
                }}
              />

              {/* Image container */}
              <motion.div
                style={{ position: 'relative' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Image - clean border, no heavy effects */}
                <div 
                  style={{
                    position: 'relative',
                    width: 'clamp(220px, 30vw, 300px)',
                    height: 'clamp(220px, 30vw, 300px)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(59, 130, 246, 0.4)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Santiago Murillo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '20% 20%' }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
                    }}
                  />
                </div>

                {/* Badge */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    background: '#111827',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <span style={{ color: '#3B82F6', fontWeight: 600, fontSize: '0.875rem' }}>
                    NJIT '26
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: '#6B7280',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Scroll
          </span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  )
}
