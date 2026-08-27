import { useState } from 'react'
import { useLanguage } from '../../context/useLanguage'

const logoToneClasses = {
  indigo: 'from-indigo-500 to-violet-600 shadow-indigo-500/25',
  blue: 'from-blue-500 to-cyan-500 shadow-blue-500/25',
  emerald: 'from-emerald-500 to-teal-500 shadow-emerald-500/25',
  orange: 'from-orange-500 to-amber-500 shadow-orange-500/25',
  rose: 'from-rose-500 to-pink-500 shadow-rose-500/25',
}

const ExperienceCard = ({ experience, isLast = false }) => {
  const { localize } = useLanguage()
  const [logoFailed, setLogoFailed] = useState(false)
  const showLogoImage = experience.logo && !logoFailed
  const logoTone = logoToneClasses[experience.logoTone] ?? logoToneClasses.indigo

  return (
    <div className="glass-effect rounded-2xl p-6 relative pl-12">
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-primary-500 to-primary-600 opacity-30" />
      )}
      
      <div
        className={`absolute left-0 top-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-linear-to-br shadow-lg ${logoTone}`}
        title={experience.logoAlt || experience.logoLabel}
      >
        {showLogoImage ? (
          <img
            src={experience.logo}
            alt={experience.logoAlt || `${experience.logoLabel} logo`}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-full bg-white object-contain p-0.5"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="px-1 text-center text-base font-black tracking-tighter text-white">
            {experience.logoLabel}
          </span>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{localize(experience, 'company')}</h3>
        <span className="text-primary-400 text-base font-medium">{experience.period}</span>
      </div>
      <h4 className="text-gray-600 mb-3 dark:text-gray-400">{localize(experience, 'position')}</h4>
      <p className="text-gray-600 text-base leading-relaxed dark:text-gray-400">
        {localize(experience, 'description')}
      </p>
    </div>
  )
}

export default ExperienceCard
