import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <div className='circle__container'>
          <div className='circle'>
            <i class='fas fa-bolt '></i>
          </div>
        </div>
        <div className='bootcamp'>
          <h3>ONLINE BOOTCAMP</h3>

          <p>React Bootcamp</p>
          <p>Flutter Bootcamp</p>
          <p>Faq's</p>
        </div>
        <div className='about'>
          <h3>SHUBHAM KUMAR</h3>
          <p>My Story</p>
          <p>Projects</p>
          <p>Design Challenge</p>
        </div>
        <div className='social'>
          <h3>GET IN TOUCH</h3>
          <p>Email Us</p>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Careers</p>
        </div>
        <div className='name'>
          <h3>SHUBHAM KUMAR</h3>
          <p>&copy; Copyright 2021</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
