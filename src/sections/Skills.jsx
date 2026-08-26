import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import SkillCard from '../components/ui/SkillCard'
import { skills } from '../data/skills'
import { useLanguage } from '../context/useLanguage'

const Skills = () => {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-padding">
      <Container>
        <SectionTitle
          badge={t('skills.badge')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
