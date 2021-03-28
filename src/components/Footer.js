import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <div className='circle__container'>
          <div className='circle'>
            <i className='fas fa-bolt '></i>
          </div>
        </div>
        <div className='bootcamp'>
          <h3>Documents</h3>
          <p>Resume</p>
          <p>Certificates</p>
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
          <a
            className='sociallink'
            href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shubham.kumar10102@gmail.com'
          >
            <p>Email </p>
          </a>

          <a className='sociallink' href='https://github.com/Shubhofficial1'>
            <p>Github</p>
          </a>

          <a className='sociallink' href='https://twitter.com/shubhofficial0'>
            <p>Twitter</p>
          </a>

          <a
            className='sociallink'
            href='https://www.linkedin.com/in/shubham-kumar-2929651a0/'
          >
            <p>Linkedin</p>
          </a>

          <a
            className='sociallink'
            href='https://www.instagram.com/shubham_gupta_01/'
          >
            <p>Instagram</p>
          </a>
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
