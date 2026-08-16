import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const navigate = useNavigate()

    const [products ,setProducts] = useState([])
    const fetchProducts = async ()=>{
      const res = await fetch('https://dummyjson.com/products');
      let data = await res.json();
      setProducts(data.products);
    }

    useEffect(()=>{
         fetchProducts()
    },[]);

    const [cart, setCart] = useState([]);
    const [productDetail, setProductDetail] = useState({});
    



    
    // addoCart
    const addToCart = (productId)=>{
        let cartProduct = products.find((pro)=>pro.id === productId)
        let duplicate ;
        if( cart.length > 0){
            duplicate = cart.find((pro)=>pro.id === productId)  
        }
        if(duplicate){
            return alert('alrady added')
        }
        setCart(cartProduct);
        console.log(cart);
    }

    const value = {
        cart,setCart,
        addToCart,products,
        productDetail, setProductDetail,
        navigate
    }
return (
    <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
    )
}

export const useApp = ()=> useContext(AppContext);