import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
      <div className="text-4xl mb-4">{skill.icon}</div>
      <h4 className="text-lg font-semibold mb-3">{skill.name}</h4>
      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className="h-2.5 rounded-full bg-linear-to-r from-primary-500 to-primary-600 transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <div className="text-right text-sm text-gray-400 mt-1">
        {skill.level}%
      </div>
    </div>
  )
}

export default SkillCard