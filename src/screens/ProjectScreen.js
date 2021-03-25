import React from 'react'
import '../css/projectScreen.css'
import projects from '../projects'
import { Link } from 'react-router-dom'

const ProjectScreen = ({ match }) => {
  const project = projects.find((p) => p._id === match.params.id)
  return (
    <div className='projectScreen'>
      <Link to='/'>
        <button>Go Back</button>
      </Link>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <img src={`.${project.imageUrl}`} alt=''></img>
    </div>
  )
}

export default ProjectScreen
