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
      <div className='details'>
        <div className='details__type'>
          <span>Type</span>
          <p>{project.type}</p>
        </div>
        <div className='details__stack'>
          <span>Tech Stack</span>
          <p>
            {project.stack.map((stack) => (
              <p>{stack}</p>
            ))}
          </p>
        </div>
        <div className='details__code'>
          <span>Code</span>
          <a href={project.code}>
            <div>Repository</div>
          </a>
        </div>
        <div className='details__live'>
          <span>Live</span>
          <a href={project.live}>
            <div>View Site</div>
          </a>
        </div>
      </div>

      <div className='explanation'>
        <div className='explanation__left'>
          <h1>Web Stack and Explanation 🔥</h1>
          <p>
            {project.explanation.map((explanation) => (
              <p>{explanation}</p>
            ))}
          </p>
        </div>
        <div className='explanation__right'>
          <div className='explanation__image'>
            <img src={`.${project.imageUrl}`} alt=''></img>
          </div>
        </div>
      </div>

      <div className='thought'>
        <div className='thought__left'>
          <h1>Problems and Thought Process 👨‍⚖️</h1>

          <p>
            {project.thought.map((thought) => (
              <p>{thought}</p>
            ))}
          </p>
        </div>
        <div className='thought__right'>
          <div className='thought__image'>
            <img src={`.${project.imageUrl}`} alt=''></img>
          </div>
        </div>
      </div>

      <div className='lesson'>
        <div className='lesson__left'>
          <h1>Lessons Learned 💡</h1>

          <p>{project.lesson}</p>
        </div>
        <div className='lesson__right'>
          <div className='lesson__image'>
            <img src={`.${project.imageUrl}`} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectScreen

/*

      <img src={`.${project.imageUrl}`} alt=''></img>

<div className='thought'>
        <h1>Problems and Thought Process 👨‍⚖️</h1>
        <p>
          {project.thought.map((thought) => (
            <p>{thought}</p>
          ))}
        </p>
      </div>


        <div className='purpose'>
        <h1>Project Purpose and Goal 🎯</h1>
        <p>
          {project.purpose.map((purpose) => (
            <p>{purpose}</p>
          ))}
        </p>
      </div>

*/
