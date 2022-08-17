import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreens from './screens/Homescreens'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Homescreens />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
