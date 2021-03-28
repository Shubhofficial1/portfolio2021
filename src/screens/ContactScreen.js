import React from 'react'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'
import '../css/contactScreen.css'

const ContactScreen = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_uaatg4t',
        'template_un0yzke',
        e.target,
        'user_9gHLoGJDspE3Wkt5r7BgC'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div>
      <Link to='/'>
        <button className='goback__button'>Go Back</button>
      </Link>
      <h1>Contact Us</h1>

      <form className='contact-form' onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='name' />
        <label>Email</label>
        <input type='email' name='email' />
        <label>Subject</label>
        <input type='text' name='subject' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form>
    </div>
  )
}

export default ContactScreen
