import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const HomeWrapper = () => {
  return (
    <div className='HomeWrapper'>
        <Nav />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default HomeWrapper