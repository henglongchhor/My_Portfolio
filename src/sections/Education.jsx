import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import { education } from '../data/education'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-slate-100/80 dark:bg-gray-800/30">
      <Container>
        <SectionTitle
          badge="Education"
          title="My Education"
          subtitle="My academic background"
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 relative pl-12"
            >
              {index < education.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-primary-500 to-primary-600 opacity-30" />
              )}
              
              <div className="absolute left-0 top-6 -translate-x-1/2 w-12 h-12 rounded-full bg-linear-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <FaGraduationCap className="text-white" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                <span className="text-primary-400 text-sm font-medium">{edu.period}</span>
              </div>
              <h4 className="text-gray-600 mb-2 dark:text-gray-400">{edu.institution}</h4>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education
