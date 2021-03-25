import React from 'react'
import '../css/header.css'

const Header = () => {
  return <header></header>
}

export default Header

/*
 <header className={`nav  ${show && 'nav_black'}`}>
      <div className='contents'>
        <h3 className={`logo  ${show && 'nav_white'}`}>Shubham</h3>
      </div>
    </header>


{ useState, useEffect }

      // const [show, setShow] = useState(false)

  // const transitionNavbar = () => {
  //   if (window.scrollY > 100) {
  //     setShow(true)
  //   } else {
  //     setShow(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', transitionNavbar)
  //   return () => window.removeEventListener('scroll', transitionNavbar)
  // }, [])

*/
