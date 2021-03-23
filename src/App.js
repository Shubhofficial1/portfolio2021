import './App.css'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProjectScreen from './screens/ProjectScreen'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />

      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProjectScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
