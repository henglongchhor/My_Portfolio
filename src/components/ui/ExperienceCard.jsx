import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

const ExperienceCard = ({ experience, isLast = false }) => {
  return (
    <div className="glass-effect rounded-2xl p-6 relative pl-12">
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-primary-500 to-primary-600 opacity-30" />
      )}
      
      <div className="absolute left-0 top-6 -translate-x-1/2 w-12 h-12 rounded-full bg-linear-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
        <FaBriefcase className="text-white" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.company}</h3>
        <span className="text-primary-400 text-sm font-medium">{experience.period}</span>
      </div>
      <h4 className="text-gray-600 mb-3 dark:text-gray-400">{experience.position}</h4>
      <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
        {experience.description}
      </p>
    </div>
  )
}

export default ExperienceCard
