import React, { useState, useEffect } from 'react'
import '../css/header.css'

const Header = () => {
  const [show, setShow] = useState(false)

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <header className={`nav  ${show && 'nav_black'}`}>
      <div className='contents'>
        <h3 className={`logo  ${show && 'nav_white'}`}>Shubham</h3>
      </div>
    </header>
  )
}

export default Header

/*

<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Shubham Kumar</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/works'>
                <Nav.Link>Works</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/resume'>
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/services'>
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
   <i class='fas fa-briefcase'></i>

    <i class='fas fa-folder'></i>

     <i class='fas fa-hand-spock'></i>

       <i class='fas fa-envelope'></i>
  
  */
