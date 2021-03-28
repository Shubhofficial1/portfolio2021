import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <div className='project__card'>
      <Link to={`/project/${project._id}`}>
        <img className='project__img' src={project.imageUrl} alt=''></img>
      </Link>
      <p className='project__name'>{project.name}</p>
      <p className='project__description'>{project.description}</p>
      <Link to={`/project/${project._id}`}>
        <span>
          View Project <i className='fas fa-chevron-right'></i>
        </span>
      </Link>
    </div>
  )
}

export default ProjectCard
