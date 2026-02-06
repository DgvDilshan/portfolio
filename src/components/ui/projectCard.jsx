import React from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const ProjectCard = ({project}) => {
  const {title, description, image, technologies, metrics, demoUrl, gitUrl} = project;
  return (
    <div className='group relative bg-[#0f0f14] border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(74,222,128,0.15)] transition-all duration-500 hover:scale-[1.02]'>
      {/* Image Section with Perspective Effect */}
      <div className='relative h-72 overflow-hidden rounded-t-3xl bg-black'>
        <div className='absolute inset-0 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1'>
          <img 
            src={image} 
            alt={title}
            className='w-full h-full object-cover brightness-75 contrast-110'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90'/>
          <div className='absolute inset-0 bg-black/30'/>
        </div>

        {/* Category Badge */}
        <div className='absolute top-4 left-4 z-10'>
          <span className='px-4 py-1.5 text-xs font-semibold text-white bg-[#1a1a20]/95 backdrop-blur-sm rounded-lg border border-white/10'>
            {project.category}
          </span>
        </div>

        {/* Action Buttons - Bottom Right */}
        <div className='absolute bottom-4 right-4 flex items-center gap-2 z-10'>
          {demoUrl && (
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='p-2.5 bg-[#1a1a20]/95 backdrop-blur-md rounded-xl border border-white/10 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-110'
              title='View demo'
            >
              <ExternalLink className='w-4 h-4 text-white' />
            </a>
          )}
          
          {gitUrl && (
            <a 
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='p-2.5 bg-[#1a1a20]/95 backdrop-blur-md rounded-xl border border-white/10 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-110'
              title='View code'
            >
              <Github className='w-4 h-4 text-white' />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className='p-6 space-y-4 bg-[#0f0f14]'>
        <div>
          <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-gray-500 text-sm leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Technology Tags */}
        <div className='flex flex-wrap gap-2 pt-2'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1.5 text-xs font-medium text-green-400 bg-green-500/5 border border-green-500/20 rounded-lg hover:bg-green-500/10 transition-all duration-200'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className='flex items-center gap-2 pt-3'>
            <TrendingUp className='w-4 h-4 text-green-400' />
            <p className='text-sm font-medium text-green-400'>
              {metrics.stars} ⭐ • {metrics.views} views
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard