import { useState } from 'react'
import Establish from './section/Establish'
import FAQ from './section/FAQ'
import Footer from './section/Footer'
import GetStarted from './section/GetStarted'
import Intro from './section/Intro'
import Meta from './section/Meta'
import Navbar from './section/Navbar'
import NewRoom from './section/NewRoom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="_li">
      <div className="_li">
        <Navbar/>
        <div>
        <div className="_a81l _afge" />
          <Intro/>
          <Establish/>
          <GetStarted/>
          <Meta/>
          <FAQ/>
          <NewRoom/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
