import React from 'react'

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  badge,
  className = '' 
}) => {
  return (
    <div className={`
      ${centered ? 'text-center' : ''}
      mb-12
      ${className}
    `}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle