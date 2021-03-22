import React from 'react'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'

const HomeScreen = () => {
  return (
    <div className='wrapper'>
      <Section5 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default HomeScreen
