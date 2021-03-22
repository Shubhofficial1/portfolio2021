import React from 'react'
import '../css/section1.css'

const Section1 = () => {
  return (
    <div className='section__1'>
      <img className='image' src='./images/face.jpg' alt=''></img>
      <h1 className='intro'>Hi ! I'm Shubham ✋</h1>
      <h2 className='description'>
        A <b>product designer</b> and <b>full stack developer</b> in India. I
        specialize in ui/ux design,responsive web design and mobile app
        Development.
      </h2>
      <button className='contact__button '>connect with me</button>
    </div>
  )
}

export default Section1
