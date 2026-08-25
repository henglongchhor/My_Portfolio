import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import ProjectCard from '../components/ui/ProjectCard'
import Button from '../components/common/Button'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <SectionTitle
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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