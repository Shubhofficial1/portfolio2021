import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'

const HomeScreen = () => {
  return (
    <div className='wrapper'>
      {/* introduction */}
      <Section1 />
      {/* skills */}
      <Section2 />

      {/* projects */}
      <Section3 />
      {/* contact page*/}
      <Section4 />
    </div>
  )
}

export default HomeScreen

/*

id='section__1' ==> provide this id in section 1
 <a
          href='#section__1'
          style={{
            textAlign: 'right',
            color: '#aeaeae',
            fontWeight: '300',
            fontSize: '28px',
          }}
        >
          <i class='fas fa-arrow-up '></i>
        </a>


import { Col, Row } from 'react-bootstrap'
import SpecializationCard from '../components/SpecializationCard'
import specializations from '../specilizations'
       <div className='section__2'>
        <span>What i do</span>
        <h6>Specializing in</h6>
        <Row>
          {specializations.map((specialization) => (
            <Col key={specialization.name} sm={12} md={6} lg={6} xl={6}>
              <SpecializationCard specialization={specialization} />
            </Col>
          ))}
        </Row>
      </div>
        
      
      <div className='section__3'>
        <div className='section3__left'>
          <img className='gif ' src='./images/working.gif' alt='no gif'></img>
        </div>
        <div className='section3__right'>
          <h1>About Us </h1>
          <h3>Interior the will of an epoch mextro</h3>
          <p>
            Description is the pattern of narrative development that aims to
            make vivid a place, object, character, or group. Description is one
            of four rhetorical modes, along with exposition, argumentation, and
            narration
          </p>
          <button className='button1'>Learn More</button>
        </div>
      </div>


      


*/
