const SkillCard = ({ skill }) => {
  const Icon = skill.icon

  return (
    <div className="glass-effect rounded-2xl p-5 transition-transform duration-300 hover:scale-105 sm:p-6">
      <div className={`mb-4 text-4xl ${skill.iconClass}`} aria-hidden="true">
        <Icon />
      </div>
      <h4 className="text-lg font-semibold mb-3">{skill.name}</h4>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-700">
        <div 
          className="h-2.5 rounded-full bg-linear-to-r from-primary-500 to-primary-600 transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <div className="text-right text-base text-gray-500 mt-1 dark:text-gray-400">
        {skill.level}%
      </div>
    </div>
  )
}

export default SkillCard
