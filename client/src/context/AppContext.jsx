import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const navigate = useNavigate()

    const [products ,setProducts] = useState([]);

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
    const isExist = carts?.find(
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
    toast.success("Added to Cart")
};

//remove from cart 
const removeItem = (productId)=>{
    setCart((prev)=>
        prev
        .map((item)=>
            item.id === productId ?
            {...item , quantity : item.quantity - 1} :

            item

        )
        .filter((item)=>item.quantity > 0)
    )
}

const totalPrice = carts?.length > 0 && carts.reduce((total,item)=> total + item.price * item.quantity , 0) ;

const [searchQuery,setSearchQuery] = useState("")


//search

const [ searchedProducts ,setSearchedProduct ]= useState([]);

useEffect(()=>{
    if(searchQuery){
        setSearchedProduct(
            products.filter((items)=>items.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        )
    }else{
        setSearchedProduct([])
        setSearchQuery("")
    }
},[searchQuery])

//increesquantity
const increaseQuantity = (id) => {
    setCart((prev) =>
        prev.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
        )
    );
};



const decreaseQuantity = (id) => {
    setCart((prev) =>
        prev.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity > 1
                        ? item.quantity - 1
                        : 1
                }
                : item
        )
    );
};


    const value = {
        carts,setCart,
        addToCart,products,
        productDetail, setProductDetail,
        navigate,totalPrice,increaseQuantity ,decreaseQuantity
        ,removeItem,searchedProducts,searchQuery,setSearchQuery
    }
return (
    <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
    )
}

export const useApp = ()=> useContext(AppContext);