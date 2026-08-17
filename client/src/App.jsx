import { useEffect, useState } from 'react'

import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Carts from './Pages/Carts'

function App() {
  const [isDetailPage,setIsDetailPage] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    let params = location.pathname.includes('detail')
    if(params){
      setIsDetailPage(true)
    }else{
      setIsDetailPage(false)
    }
  },[location])

  return (
    <div className='mx-10 md:mx-30'>
     <Nav/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/carts' element={<Carts/>}/>
      <Route path='/product-detail/:id' element={<ProductDetails/>}/>
     </Routes>

     {
      !isDetailPage && <Footer/>
     }
    
    </div>
  )
}

export default App
