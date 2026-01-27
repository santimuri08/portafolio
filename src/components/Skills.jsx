import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Languages',
    icon: '💻',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL']
  },
  {
    name: 'Mobile Development',
    icon: '📱',
    skills: ['React Native', 'Ionic', 'iOS', 'Android']
  },
  {
    name: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: ['React.js', 'Node.js', 'Express.js', 'Bootstrap']
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB', 'MariaDB', 'PostgreSQL']
  },
  {
    name: 'Web Development',
    icon: '🌐',
    skills: ['REST APIs', 'Responsive Design', 'JSON', 'CRUD Operations', 'API Integration']
  },
  {
    name: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'GitLab', 'VS Code']
  },
  {
    name: 'Cloud & Deployment',
    icon: '☁️',
    skills: ['GitHub Pages', 'Vercel', 'Netlify', 'AWS', 'Google Cloud']
  },
  {
    name: 'Design & UI',
    icon: '🎨',
    skills: ['Figma', 'Adobe']
  },
  {
    name: 'Operating Systems',
    icon: '🖥️',
    skills: ['Windows', 'Linux', 'macOS']
  },
  {
    name: 'Testing & Debugging',
    icon: '🧪',
    skills: ['Debugging', 'Unit Testing', 'Browser DevTools']
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">My Expertise</p>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <div className="section-line" />
          <p className="section-description">
            A comprehensive collection of technologies and tools I've mastered through projects, coursework, and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid #1F2937',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                borderColor: 'rgba(59, 130, 246, 0.3)',
                y: -4
              }}
            >
              {/* Category Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid #1F2937'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  fontFamily: "'Clash Display', sans-serif", 
                  color: '#3B82F6',
                  margin: 0
                }}>
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '10px' 
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.05 + skillIndex * 0.03 
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#E5E7EB',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid #1F2937',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    whileHover={{
                      background: 'rgba(59, 130, 246, 0.15)',
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      color: '#60A5FA'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            marginTop: '56px',
            paddingTop: '40px',
            borderTop: '1px solid #1F2937',
            flexWrap: 'wrap'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { value: '10', label: 'Skill Areas' },
            { value: '20+', label: 'Technologies' },
            { value: '8+', label: 'Projects Build' },
            { value: '5+', label: 'Years Learning' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <p className="gradient-text" style={{ 
                fontSize: '2rem', 
                fontWeight: 700, 
                fontFamily: "'Clash Display', sans-serif",
                marginBottom: '4px'
              }}>
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