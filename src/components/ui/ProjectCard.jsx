import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Button from '../common/Button'

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
      <div className="relative overflow-hidden h-48 bg-linear-to-br from-primary-100 to-primary-300 dark:from-primary-950 dark:to-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-3">
            <a href={project.demoLink} className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <FaExternalLinkAlt className="text-white" />
            </a>
            <a href={project.codeLink} className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
              <FaGithub className="text-white" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
              {tech}
            </span>
          ))}
        </div>
        <Button variant="outline" size="sm" fullWidth>
          View Details
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard
