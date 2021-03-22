import './App.css'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

/*

      import WorksScreen from './screens/WorksScreen'
      import ResumeScreen from './screens/ResumeScreen'
      import ServicesScreen from './screens/ServicesScreen'
      import ContactScreen from './screens/ContactScreen'
      import LoginScreen from './screens/LoginScreen'

      
          <Route path='/works' component={WorksScreen} exact />
          <Route path='/resume' component={ResumeScreen} exact />
          <Route path='/services' component={ServicesScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
  
  */
