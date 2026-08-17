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

    const [carts, setCart] = useState([]);
    const [productDetail, setProductDetail] = useState({});
    



    
//    addToCArtt
const addToCart = (product) => {
    const isExist = carts.find(
        (item) => item.id === product.id
    );

    if (isExist) {
        setCart((prev) =>
            prev.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    } else {
        setCart((prev) => [
            ...prev,
            {
                ...product,
                quantity: 1
            }
        ]);
    }
};

    useEffect(()=>{
        console.log(carts)
    },[carts])

    const value = {
        carts,setCart,
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