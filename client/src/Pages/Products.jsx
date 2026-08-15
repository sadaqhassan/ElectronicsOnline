import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const [products ,setProducts] = useState([])
    const fetchProducts = async ()=>{
      const res = await fetch('https://dummyjson.com/products');
      let data = await res.json();
      setProducts(data.products);
    }

    console.log(products)

    useEffect(()=>{
        if(products){
         fetchProducts()   
        }
    },[]);


  return (
    <div className='grid grid-cols-2 gap-6 mt-10 md:grid-cols-4 '>
      {
       
        products.map((product)=>(
            <div key={product.id}>
                <ProductCard product={product}/>
            </div>
        ))
      }
    </div>
  )
}

export default Products
