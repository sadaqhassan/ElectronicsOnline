import { useState } from "react"
import { Link } from "react-router-dom"
import { useApp } from "../context/AppContext"
import { ShoppingCartIcon } from "lucide-react"

const Nav = () => {
    const [open, setOpen] =useState(false)
    const {navigate , carts} = useApp()

    return (
        <nav className="flex space-x-10 font-medium items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <div>
                <p className="font-bold text-sm text-green-600 px-2 py-2">Samo<br/>Electronics</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to={'/'}>Home</Link>
                <Link to={'products'} >Products</Link>
                <Link to={'/contacts'} >Contact</Link>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className=" relative cursor-pointer " onClick={()=>navigate('/carts')}>
                   <Link><ShoppingCartIcon/></Link>

                    <button className="absolute -top-2 -right-3 text-xs text-white bg-green-600 w-[18px] h-[18px] rounded-full">{carts?.length > 0 ? carts.length : 0 }</button>
                </div>

                <button className="cursor-pointer px-8 py-2 bg-green-600 hover:bg-green-400 transition text-white rounded-full">
                    Login
                </button>
            </div>

            <div className="relative md:hidden cursor-pointer" onClick={()=>navigate('/carts')}>
                   <Link><ShoppingCartIcon/></Link>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-green-600 w-[18px] h-[18px] rounded-full">{carts?.length > 0 ? carts.length : 0 }</button>
                </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">

                {/* Menu Icon SVG */}

                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link to={'/'}  className="block">Home</Link>
                <Link to={'/products'}  className="block">Products</Link>
                <Link to={'/'} className="block">Contact</Link>
                
                <button className="cursor-pointer px-6 py-2 mt-2 bg-green-600 hover:bg-green-400 transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>
             
        </nav>
    )
}

export default Nav