import Footer from "../pages/components/Footer";
import Header from "../pages/components/Header";
import React, { Children } from 'react'

const layout = (Children) => {
  return (
    <div>
        <Header/>
        {Children}
        <Footer/>
    </div>
  )
}

export default layout