import React, { useState } from 'react'
import { Alert, Form, Modal } from 'react-bootstrap'
import '../css/section4.css'
import emailjs from 'emailjs-com'

const Section4 = () => {
  function MyModal(props) {
    const [show, setShow] = useState(true)

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
            e.target.reset()
            setShow(false)
          },
          (error) => {
            console.log(error.text)
            setShow(false)
          }
        )
    }
    return (
      <Modal {...props} size='md' animation={false}>
        <Modal.Body className='contact__body'>
          {show ? (
            <div>
              <h4>Contact Us</h4>
              <Form className='contact__form' onSubmit={sendEmail}>
                <Form.Group>
                  <Form.Label className='form__label'>Full Name</Form.Label>
                  <Form.Control
                    className='form__control'
                    type='text'
                    name='name'
                    autoComplete='none'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label className='form__label'>Email</Form.Label>
                  <Form.Control
                    className='form__control'
                    type='email'
                    name='email'
                    autoComplete='none'
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label className='form__label'>Message 🚀</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    type='text'
                    name='message'
                    autoComplete='none'
                  />
                </Form.Group>

                <button className='contact__button' type='submit'>
                  Submit
                </button>
              </Form>
            </div>
          ) : (
            <Alert variant='success' onClose={() => setShow(true)} dismissible>
              <Alert.Heading>your Message has been sent</Alert.Heading>
              <p>We will reach out to you in a while.</p>
            </Alert>
          )}
        </Modal.Body>
      </Modal>
    )
  }

  const [modalShow, setModalShow] = useState(false)

  return (
    <div className='section__4'>
      <div>
        <h1>Work Inquiry</h1>
        <p>Lets Talk and i'll help you by all my best</p>
      </div>
      <div>
        <button className='button' onClick={() => setModalShow(true)}>
          Let's Chat
        </button>

        <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  )
}

export default Section4

/*
 <Link to='/contact' className='button'>
          Let's chat
        </Link>



        <Form.Group>
            <Form.Label className='form__label'>Subject</Form.Label>
            <Form.Control
              className='form__control'
              type='text'
              name='subject'
            />
          </Form.Group>


        <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Chat</Modal.Title>
      </Modal.Header>

          <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
*/
