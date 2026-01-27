import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, ChevronDown, BookOpen } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'Full Stack Developer Professional Certificate',
    issuer: 'Meta',
    year: '2024',
    logo: 'https://cdn.simpleicons.org/meta/0668E1',
    description: 'Gained hands-on experience building full-stack web applications using modern front-end and back-end technologies, including REST APIs, databases, and responsive user interfaces.'
  },
  {
    id: 2,
    title: 'IT Automation with Python Professional Certificate',
    issuer: 'Google',
    year: '2024',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    description: 'Developed Python skills for automation, scripting, and problem-solving, including working with files, data processing, and improving development workflows.'
  },
  {
    id: 3,
    title: 'UX Design Professional Certificate',
    issuer: 'Google',
    year: '2024',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
    description: 'Applied user-centered design principles through research, wireframing, prototyping, and usability testing to create intuitive and effective digital experiences.'
  },
]

const education = {
  degree: "Bachelor's Degree",
  field: 'Information Technology',
  institution: 'New Jersey Institute of Technology (NJIT)',
  graduation: 'May 2026',
}

const coursework = [
  {
    name: 'Building Web Applications',
    description: 'Designed and developed full-stack web applications using modern frameworks, focusing on CRUD functionality, REST APIs, and database integration.'
  },
  {
    name: 'Advanced Website Development',
    description: 'Implemented advanced front-end and back-end features, emphasizing responsive design, performance optimization, and maintainable code structure.'
  },
  {
    name: 'Mobile Applications Design',
    description: 'Developed mobile application interfaces and workflows, focusing on usability, navigation, and mobile-first design principles.'
  },
  {
    name: 'Database Design, Management & Applications',
    description: 'Designed relational database schemas, wrote SQL queries, and managed data integrity for scalable application development.'
  },
  {
    name: 'Internet Applications',
    description: 'Built dynamic web applications using client-server architecture, integrating front-end interfaces with backend services.'
  },
  {
    name: 'User Experience Design',
    description: 'Applied UX research, wireframing, and prototyping techniques to design intuitive, user-centered digital experiences.'
  },
  {
    name: 'Systems Integration',
    description: 'Integrated multiple systems and services using APIs, ensuring data flow, compatibility, and system reliability.'
  },
  {
    name: 'IT Capstone Project',
    description: 'Collaborated on an industry-sponsored capstone project, applying full-stack development, Agile workflows, and real-world problem solving.'
  },
  {
    name: 'E-Commerce Technology',
    description: 'Developed web-based commerce solutions, focusing on product management, user interaction, and transactional workflows.'
  },
  {
    name: 'Analysis & System Design',
    description: 'Analyzed business requirements and designed system architectures using structured modeling and software design methodologies.'
  },
]

const stats = [
  { label: 'Projects Completed', value: '8+' },
  { label: 'Certificates Earned', value: '3' },
  { label: 'Technologies Used', value: '20+' },
  { label: 'Years of Study', value: '5' },
]

function CourseAccordion({ course, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          borderRadius: isOpen ? '10px 10px 0 0' : '10px',
          background: isOpen ? 'rgba(59, 130, 246, 0.1)' : 'rgba(30, 41, 59, 0.5)',
          border: isOpen ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid #1F2937',
          borderBottom: isOpen ? 'none' : '1px solid #1F2937',
          color: isOpen ? '#60A5FA' : '#E5E7EB',
          fontSize: '0.8rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          textAlign: 'left'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={14} style={{ color: isOpen ? '#3B82F6' : '#6B7280', flexShrink: 0 }} />
          {course.name}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, marginLeft: '8px' }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '12px 16px',
                background: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderTop: 'none',
                borderRadius: '0 0 10px 10px',
                fontSize: '0.75rem',
                lineHeight: 1.6,
                color: '#9CA3AF'
              }}
            >
              {course.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Certificates() {
  const [openCourse, setOpenCourse] = useState(null)

  const toggleCourse = (index) => {
    setOpenCourse(openCourse === index ? null : index)
  }

  return (
    <section id="certificates" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Achievements</p>
          <h2 className="section-title">Certificates & <span className="gradient-text">Education</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid-2">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass" style={{ padding: '32px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                  }}
                >
                  🎓
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280', fontSize: '0.875rem' }}>
                  <Calendar size={14} />
                  {education.graduation}
                </span>
              </div>

              <span 
                style={{ 
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  marginBottom: '16px'
                }}
              >
                Education
              </span>

              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                fontFamily: "'Clash Display', sans-serif", 
                color: 'white',
                marginBottom: '8px'
              }}>
                {education.degree}
              </h3>
              <p style={{ fontSize: '1.25rem', color: '#3B82F6', fontWeight: 500, marginBottom: '4px' }}>
                {education.field}
              </p>
              <p className="text-body">{education.institution}</p>

              {/* NJIT box */}
              <div 
                style={{ 
                  marginTop: '24px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid #1F2937'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div 
                    style={{ 
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      background: 'rgba(220, 38, 38, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ color: '#f87171', fontWeight: 700, fontSize: '0.75rem' }}>NJIT</span>
                  </div>
                  <div>
                    <p style={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>New Jersey Institute of Technology </p>
                    <p style={{ color: '#6B7280', fontSize: '0.75rem' }}>Specializing in Web Development & Applications</p>
                  </div>
                </div>
              </div>

              {/* Coursework Accordion */}
              <div style={{ marginTop: '24px' }}>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Relevant Coursework</span>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    padding: '2px 8px', 
                    borderRadius: '50px', 
                    background: 'rgba(59, 130, 246, 0.15)', 
                    color: '#3B82F6' 
                  }}>
                    Click to expand
                  </span>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {coursework.map((course, index) => (
                    <CourseAccordion
                      key={course.name}
                      course={course}
                      index={index}
                      isOpen={openCourse === index}
                      onClick={() => toggleCourse(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="glass"
                style={{ padding: '24px' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div 
                    style={{ 
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid #1F2937',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '28px'
                    }}
                  >
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      style={{ 
                        width: '44px', 
                        height: '44px', 
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <span 
                          style={{ 
                            display: 'inline-block',
                            padding: '2px 10px',
                            borderRadius: '50px',
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            background: 'rgba(59, 130, 246, 0.15)',
                            color: '#3B82F6',
                            marginBottom: '8px'
                          }}
                        >
                          Certificate
                        </span>
                        <h3 style={{ 
                          fontSize: '1.1rem', 
                          fontWeight: 700, 
                          fontFamily: "'Clash Display', sans-serif", 
                          color: 'white',
                          marginBottom: '4px'
                        }}>
                          {cert.title}
                        </h3>
                        <p className="text-small">{cert.issuer}</p>
                      </div>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6B7280', fontSize: '0.875rem' }}>
                        <Calendar size={14} />
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div 
                  style={{ 
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #1F2937',
                  }}
                >
                  <p style={{ 
                    color: '#9CA3AF', 
                    fontSize: '0.8rem', 
                    lineHeight: 1.6,
                    marginBottom: '12px'
                  }}>
                    {cert.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={16} style={{ color: '#3B82F6' }} />
                    <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Verified Credential</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid-4"
          style={{ marginTop: '48px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '24px 16px',
                borderRadius: '16px',
                background: 'rgba(30, 41, 59, 0.3)',
                border: '1px solid #1F2937',
                transition: 'border-color 0.3s ease'
              }}
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.3)' }}
            >
              <p 
                className="gradient-text"
                style={{ fontSize: '2rem', fontWeight: 700, fontFamily: "'Clash Display', sans-serif", marginBottom: '4px' }}
              >
                {stat.value}
              </p>
              <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}