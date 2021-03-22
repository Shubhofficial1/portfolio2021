import React from 'react'
import ProductCard from '../components/ProductCard'
import projects from '../projects'
import '../css/section3.css'

const Section3 = () => {
  return (
    <div className='section__3'>
      <h1 className='section3__heading'>What I've been working on</h1>
      <p className='section3__description'>
        I like to stay busy and always have a project in the works. Take a look
        at some of the applications and bootathon I've dedicated my time to.
      </p>
      <div className='section3__grid'>
        {projects.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  )
}

export default Section3
