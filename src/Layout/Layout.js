import React from 'react'
import Navbar from './NavBar/Navbar'

const Layout = ({children}) => {
  return (
    <>
    <div className="bg-main ">
        <Navbar />
        {children}
    </div>
    
    </>
  )
}

export default Layout