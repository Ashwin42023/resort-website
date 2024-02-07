import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

function LayoutPage({children}) {
  return (
    <>
    
    <Navbar/>
    {children}
    <Footer/>
    
    </>

  )
}

export default LayoutPage;