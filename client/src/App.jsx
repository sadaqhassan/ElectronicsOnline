import { useState } from 'react'

import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-20'>
     <Nav/>


    <Footer/>
    </div>
  )
}

export default App
