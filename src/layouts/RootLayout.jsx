import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <Header />
            <h1>komzksnx</h1>
            <Outlet />
        </div>
    )
}

export default RootLayout