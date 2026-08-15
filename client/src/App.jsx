import { useState } from 'react'

import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'

function App() {

  return (
    <div className='mx-10 md:mx-20'>
     <Nav/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
     </Routes>

    <Footer/>
    </div>
  )
}

export default App
