import React from 'react'

const SpecializationCard = ({ specialization }) => {
  const mystyle = {
    backgroundColor: specialization.color,
  }
  const mystyle1 = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  }
  return (
    <div className='specialization__container'>
      <div className='specialization__card'>
        <div className='logo__image' style={mystyle}>
          <img src={specialization.image} alt='' style={mystyle1}></img>
        </div>
        <div className='specialization__info'>
          <h4>{specialization.name}</h4>
          <p>{specialization.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SpecializationCard
