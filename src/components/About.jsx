import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Globe, Code2 } from 'lucide-react'

const experiences = [
  {
    title: 'Guest Services Associate',
    company: 'MetLife Stadium',
    period: '2023 - Present',
    description: 'Worked in fast-paced, high-pressure environments supporting large-scale events. Developed strong problem-solving and communication skills by resolving issues in real time and collaborating with team members to deliver a positive guest experience.',
    icon: Briefcase,
  },
  {
    title: 'Amazon Associate',
    company: 'Amazon',
    period: '2022 - Present',
    description: 'Used internal digital systems to manage inventory, orders, and customer inquiries. Adapted quickly to new tools and workflows in a data-driven environment, strengthening technical awareness and attention to detail.',
    icon: Briefcase,
  },
]

const highlights = [
  { icon: GraduationCap, value: 'B.S. in IT @ NJIT', description: 'Expected May 2026' },
  { icon: Globe, value: 'Bilingual', description: 'English & Spanish' },
  { icon: Code2, value: 'Full Stack', description: 'React, Node.js, Python' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass" style={{ padding: '32px' }}>
              <h3 className="heading-md" style={{ color: 'white', marginBottom: '20px' }}>
                Passionate About Building the Web & Applications
              </h3>
              <p className="text-body" style={{ marginBottom: '16px' }}>
                I’m an entry-level Full Stack Web & Application Developer who builds responsive, scalable web and mobile applications using HTML,
                 CSS, JavaScript, React, Node.js, and React Native. Through academic and industry-sponsored projects, 
                 I’ve gained hands-on experience working across the full stack — from clean, user-focused interfaces to RESTful APIs and database integration.
              </p>
              <p className="text-body" style={{ marginBottom: '16px' }}>
                I enjoy turning ideas into reliable, real-world solutions by working with modern frameworks, relational and NoSQL databases 
                (MySQL, PostgreSQL, MongoDB), and deploying applications using platforms like Vercel, Netlify, and AWS.
              </p>
              <p className="text-body">
                I’m motivated by solving problems, writing clean and maintainable code, and continuously improving my 
                skills to deliver meaningful digital experiences. I’m currently seeking opportunities where I can contribute, 
                learn from experienced developers, and grow as a professional engineer.
              </p>

              {/* Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '32px' }}>
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.value}
                    style={{
                      textAlign: 'center',
                      padding: '16px 12px',
                      borderRadius: '12px',
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid #1F2937'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <item.icon style={{ width: '24px', height: '24px', color: '#3B82F6', margin: '0 auto 8px' }} />
                    <p style={{ color: 'white', fontWeight: 600, fontSize: '0.8rem' }}>{item.value}</p>
                    <p style={{ color: '#6B7280', fontSize: '0.7rem', marginTop: '4px' }}>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="heading-md" style={{ color: 'white', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase style={{ width: '20px', height: '20px', color: '#3B82F6' }} />
              Work Experience
            </h3>

            <div style={{ position: 'relative' }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute',
                left: '15px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: '#3B82F6'
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    style={{ position: 'relative', paddingLeft: '48px' }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                  >
                    {/* Dot */}
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: '8px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#111827',
                      border: '2px solid #3B82F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <exp.icon style={{ width: '14px', height: '14px', color: '#3B82F6' }} />
                    </div>

                    <div className="glass" style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <div>
                          <h4 style={{ color: 'white', fontWeight: 600 }}>{exp.title}</h4>
                          <p style={{ color: '#3B82F6', fontSize: '0.875rem' }}>{exp.company}</p>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#6B7280', background: '#1E293B', padding: '4px 12px', borderRadius: '50px' }}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-small">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What drives me */}
            <motion.div
              style={{
                marginTop: '32px',
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '12px' }}>💡 What Drives Me</h4>
              <p className="text-small">
                I’m driven by building software that’s clear, usable, and reliable. 
                I enjoy solving real problems by turning ideas into well-structured web and mobile applications, 
                focusing on clean code, thoughtful design, and a smooth user experience. I’m motivated by continuous learning and improving my skills through hands-on projects and collaboration.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}