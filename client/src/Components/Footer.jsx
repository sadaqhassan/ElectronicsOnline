import React from 'react'

const Footer = () => {
  return (
    <div className='fixed left-0 right-0  bottom-0 '>
            <footer className="flex flex-col items-center justify-around w-full py-1 text-sm bg-slate-50 text-gray-800/70">
                <div>
                <p className="font-bold text-xl text-green-600 px-2 py-2">SamoElectronics</p>
            </div>
                <p className="mt-4 text-center">Copyright © { new Date().getFullYear() } <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reservered.</p>
                <div className="flex items-center gap-4 ">
                    <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
                        Brand Guidelines
                    </a>
                    <div className="h-4 w-px bg-black/20"></div>
                    <a href="#" className="font-medium text-gray-800 hover:text-black transition-all">
                       SamoElctronics 
                    </a>
                </div>
            </footer>
            </div>
  )
}

export default Footer
