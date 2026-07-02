import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <Header />
            
          <div className='container mx-auto px-20'>
              <Outlet />
          </div>
        </div>
    )
}

export default RootLayout