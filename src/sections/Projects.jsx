import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'
import { useLanguage } from '../context/useLanguage'

const Projects = () => {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section-padding">
      <Container>
        <SectionTitle
          badge={t('projects.badge')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
