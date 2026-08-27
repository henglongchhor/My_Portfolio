import { useLanguage } from '../../context/useLanguage'

const ProjectCard = ({ project }) => {
  const { localize, t } = useLanguage()

  return (
    <div className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="relative overflow-hidden h-48 bg-linear-to-br from-primary-100 to-primary-300 dark:from-primary-950 dark:to-gray-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          {/* <div className="flex gap-3">
            <a href={project.demoLink} className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              
            </a>
          </div> */}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-base mb-4 dark:text-gray-400">{localize(project, 'description')}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-base font-medium text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg border-2 border-primary-500 px-4 py-2 text-base font-semibold text-primary-500 transition-all duration-300 hover:bg-primary-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          {t('projects.viewDemo')}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
