import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import ExperienceCard from '../components/ui/ExperienceCard'
import { experiences } from '../data/experience'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-100/80 dark:bg-gray-800/30">
      <Container>
        <SectionTitle
          badge="Experience"
          title="Work Experience"
          subtitle="My professional journey"
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ExperienceCard experience={exp} isLast={index === experiences.length - 1} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
