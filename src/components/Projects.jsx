import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AbsoluteJS Platform',
    subtitle: 'Industry-Sponsored Capstone',
    shortDescription: 'Contributed to an industry-sponsored web development platform focused on performance, security, and end-to-end type safety.',
    fullDescription: 'Contributed to the development of AbsoluteJS, an industry-sponsored web development platform focused on performance, security, and end-to-end type safety. Worked as part of a collaborative team to enhance user interface components, improve developer documentation, and support multiple framework and database integrations. Participated in Agile sprints, version-controlled workflows, and iterative feature development.',
    image: '/images/absolutejs.png',
    tags: ['JavaScript', 'TypeScript', 'React', 'Bun', 'PostgreSQL', 'HTML', 'CSS', 'Git', 'GitHub'],
    category: 'Web',
    liveUrl: 'https://absolutejs.com',
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'FitCoach AI',
    subtitle: 'Mobile Fitness Application',
    shortDescription: 'Built a mobile-first fitness and nutrition coaching application with AI-powered personalization.',
    fullDescription: 'Built a mobile-first fitness and nutrition coaching application focused on personalized user experiences. Integrated OpenAI APIs to generate customized workout and meal guidance, provide AI-powered coaching, and support progress tracking with persistent local storage. Designed responsive interfaces and structured application state to deliver a smooth and intuitive mobile experience.',
    image: '/images/fitness-mentor.png',
    tags: ['React Native', 'Expo', 'JavaScript', 'OpenAI API', 'AsyncStorage', 'Context API'],
    category: 'Mobile',
    liveUrl: 'https://drive.google.com/file/d/1oIGIPn3ePcg2kZxtEYWctVYbZptRbt1b/view',
    githubUrl: 'https://github.com/santimuri08/Fitness-mentor-project.git',
    featured: true,
  },
  {
    id: 3,
    title: 'Job Club',
    subtitle: 'Career Resource & Community Platform',
    shortDescription: 'Built an interactive web platform to support students in exploring career resources and building skills.',
    fullDescription: 'Built an interactive web platform designed to support students in exploring career resources, joining a community, discovering events, and accessing tools to build real-world skills. Features include dynamic navigation, organized sections for workshops and networking, and a welcoming interface to help users launch their AI and technology careers. Deployed on Vercel for fast global access and seamless updates.',
    image: '/images/job-club.png',
    tags: ['React', 'Vercel', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    liveUrl: 'https://job-club-theta.vercel.app',
    githubUrl: null,
    featured: true,
  },
  {
    id: 4,
    title: 'StudyFuel',
    subtitle: 'Meal Planning & Subscription Platform',
    shortDescription: 'Built a Shopify-based meal planning platform designed for college students with personalized recommendations.',
    fullDescription: 'Built a Shopify-based meal planning and subscription platform designed for college students. Implemented a custom interactive quiz to recommend personalized meal plans, developed multiple subscription tiers, and customized Shopify themes using Liquid, JavaScript, and CSS. Focused on responsive design, user onboarding, and a clean, brand-consistent experience across desktop and mobile devices.',
    image: '/images/studyfuel.png',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS', 'Git', 'Shopify CLI', 'Vercel'],
    category: 'Web',
    liveUrl: 'https://sutdyfuel.myshopify.com',
    githubUrl: 'https://github.com/santimuri08/everyday-ai-shopify-theme.git',
    featured: true,
  },
  {
    id: 5,
    title: 'Watch Showcase',
    subtitle: 'Full-Stack Web Application',
    shortDescription: 'Developed a full-stack Django web application for showcasing luxury and collectible watches.',
    fullDescription: 'Developed a full-stack Django web application for showcasing luxury and collectible watches. Implemented user authentication, ratings, and review systems with validation to prevent duplicate reviews. Designed and implemented relational database models with constraints and data validation. Created admin-only analytics views to aggregate and sort user feedback using Django ORM.',
    image: '/images/watch-showcase.png',
    tags: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    liveUrl: 'https://watch-showcase-web-page.onrender.com',
    githubUrl: 'https://github.com/santimuri08/Watch-showcase-Web-Page.git',
    featured: true,
  },
  {
    id: 6,
    title: 'Music AI Video Generator',
    subtitle: 'AI-Powered Creative Platform',
    shortDescription: 'An AI-powered platform that generates original lyrics, music, and visual imagery for complete music videos.',
    fullDescription: 'An AI-powered platform that generates original lyrics, composes unique music, and creates thematic visual imagery to produce complete music videos. Leverages machine learning models to automate the creative process from text input to finished video output. Built with Python and various AI/ML libraries for audio and image generation.',
    image: '/images/music-ai.png',
    tags: ['Python', 'AI', 'Machine Learning', 'Audio Processing', 'Image Generation'],
    category: 'AI',
    liveUrl: 'https://drive.google.com/file/d/1bOnX3Cllkmn7rceB-yw0BBGgKDUeZv6q/view',
    githubUrl: 'https://github.com/Santimuri367/Music-Video-AI.git',
    featured: false,
  },
  {
    id: 7,
    title: 'VR Escape Room',
    subtitle: 'Immersive VR Experience',
    shortDescription: 'An immersive VR Escape Room with interactive gameplay mechanics and puzzle-solving elements.',
    fullDescription: 'An immersive VR Escape Room developed using Unity and C#. Features interactive gameplay mechanics, VR movement, and puzzle-solving elements. Players must solve a series of challenges to escape within a time limit, utilizing VR controllers for object manipulation and environment interaction. Designed for engaging, intuitive VR user experience.',
    image: '/images/vr-escape.png',
    tags: ['Unity', 'C#', 'VR', 'Game Development', '3D Modeling'],
    category: 'Games',
    liveUrl: 'https://drive.google.com/file/d/1IKTUZz6I1cVPiFlmmWshUQIc_KXba6p-/view',
    githubUrl: 'https://github.com/santimuri08/VR-Escape-Room.git',
    featured: false,
  },
  {
    id: 8,
    title: 'Flower Shop Website',
    subtitle: 'E-Commerce Platform',
    shortDescription: 'A full-stack PHP e-commerce website with user authentication and shopping cart functionality.',
    fullDescription: 'A full-stack PHP e-commerce website with user authentication, shopping cart functionality, and categorized product sections. Features a clean, user-friendly interface for browsing and purchasing flower arrangements with secure checkout and order management. Built with PHP backend and MySQL database for reliable data storage.',
    image: '/images/flower-shop.png',
    tags: ['PHP', 'MySQL', 'E-commerce', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    liveUrl: 'https://www.canva.com/design/DAGlSurAcYU/ltRkB4bsWehbWpDJBcOSQw/view',
    githubUrl: 'https://github.com/santimuri08/Flower-website-.git',
    featured: false,
  },
  {
  id: 9,
  title: 'StudyAI',
  subtitle: 'AI Academic Productivity Platform',
  shortDescription: 'An AI-powered platform that helps college students break down assignments, manage study schedules, and get real-time academic help via Claude AI.',
  fullDescription: 'An AI-powered academic productivity platform built with Next.js, TypeScript, and Tailwind CSS. Students paste assignment text and Claude AI generates a structured breakdown with summaries, task lists, time estimates, and deadline detection. Features a drag-and-drop study calendar, an AI chat assistant for real-time academic questions, and a dashboard with progress tracking. Integrated with the Anthropic API for assignment analysis and streaming chat responses.',
  image: '/images/studyai.png',
  tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Claude AI', 'Framer Motion'],
  category: 'AI',
  liveUrl: 'https://studyai-indol.vercel.app',
  githubUrl: 'https://github.com/santimuri08/studyai',
  featured: true,
},
]

const categories = ['All', 'Web', 'Mobile', 'AI', 'Games']

function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden', background: '#1E293B', flexShrink: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = `https://placehold.co/600x400/1E293B/3B82F6?text=${encodeURIComponent(project.title)}`
          }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.2), transparent)' 
        }} />

        {/* Featured badge */}
        {project.featured && (
          <div style={{ 
            position: 'absolute',
            top: '12px',
            left: '12px',
            padding: '6px 12px',
            borderRadius: '50px',
            background: 'rgba(59, 130, 246, 0.2)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: '#3B82F6',
            fontSize: '0.7rem',
            fontWeight: 600
          }}>
            ⭐ Featured
          </div>
        )}

        {/* Hover overlay - Click to view */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(59, 130, 246, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <span style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>Click to View Details</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>Full description & technologies</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          fontSize: '1.1rem', 
          fontWeight: 700, 
          fontFamily: "'Clash Display', sans-serif",
          color: isHovered ? '#3B82F6' : 'white',
          marginBottom: '4px',
          transition: 'color 0.3s ease'
        }}>
          {project.title}
        </h3>
        {project.subtitle && (
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#3B82F6', 
            marginBottom: '10px',
            fontWeight: 500
          }}>
            {project.subtitle}
          </p>
        )}
        <p 
          className="line-clamp-2"
          style={{ 
            color: '#9CA3AF', 
            fontSize: '0.85rem', 
            lineHeight: 1.6, 
            marginBottom: '14px',
            flex: 1
          }}
        >
          {project.shortDescription}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{ 
                fontSize: '0.7rem', 
                padding: '4px 10px',
                borderRadius: '50px',
                background: '#1E293B', 
                color: '#9CA3AF',
                border: '1px solid #1F2937'
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              style={{ 
                fontSize: '0.7rem', 
                padding: '4px 10px',
                borderRadius: '50px',
                background: 'rgba(59, 130, 246, 0.1)', 
                color: '#3B82F6',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#111827',
          borderRadius: '20px',
          border: '1px solid #1F2937',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid #1F2937',
            color: '#9CA3AF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
            e.currentTarget.style.color = '#3B82F6'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)'
            e.currentTarget.style.color = '#9CA3AF'
          }}
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = `https://placehold.co/800x400/1E293B/3B82F6?text=${encodeURIComponent(project.title)}`
            }}
          />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to top, #111827 0%, transparent 50%)' 
          }} />

          {/* Featured badge */}
          {project.featured && (
            <div style={{ 
              position: 'absolute',
              top: '16px',
              left: '16px',
              padding: '8px 16px',
              borderRadius: '50px',
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#3B82F6',
              fontSize: '0.8rem',
              fontWeight: 600
            }}>
              ⭐ Featured Project
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          {/* Title & Subtitle */}
          <h2 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 700, 
            fontFamily: "'Clash Display', sans-serif",
            color: 'white',
            marginBottom: '4px'
          }}>
            {project.title}
          </h2>
          {project.subtitle && (
            <p style={{ 
              fontSize: '1rem', 
              color: '#3B82F6', 
              marginBottom: '20px',
              fontWeight: 500
            }}>
              {project.subtitle}
            </p>
          )}

          {/* Full Description */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '0.875rem', 
              fontWeight: 600, 
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              Project Description
            </h3>
            <p style={{ 
              color: '#E5E7EB', 
              fontSize: '1rem', 
              lineHeight: 1.8
            }}>
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ 
              fontSize: '0.875rem', 
              fontWeight: 600, 
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              Technologies Used
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{ 
                    fontSize: '0.85rem', 
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.1)', 
                    color: '#60A5FA',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    fontWeight: 500
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <ExternalLink size={18} />
                View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '50px',
                  background: 'transparent',
                  color: '#E5E7EB',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid #1F2937',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                  e.currentTarget.style.color = '#3B82F6'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1F2937'
                  e.currentTarget.style.color = '#E5E7EB'
                }}
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-line" />
          <p className="section-description">
            A showcase of my best work across web, mobile, AI, and game development. Click any project to see full details.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '10px', 
            marginBottom: '40px' 
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Filter size={18} style={{ color: '#6B7280' }} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '8px 18px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 500,
                background: activeCategory === category ? '#3B82F6' : 'rgba(30, 41, 59, 0.5)',
                color: activeCategory === category ? '#0F172A' : '#9CA3AF',
                border: activeCategory === category ? 'none' : '1px solid #1F2937',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.borderColor = '#1F2937'
                }
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '24px' 
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub link */}
        <motion.div
          style={{ textAlign: 'center', marginTop: '48px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/santimuri08"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#9CA3AF',
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3B82F6'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
          >
            <Github size={20} />
            <span>View all projects on GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}
