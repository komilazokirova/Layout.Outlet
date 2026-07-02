import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div>
            <div className='flex items-center  container mx-auto px-20 min-h-screen'>
                <div className='flex flex-col items-center  w-1/2 gap-4'>
                    <h1>
                        Auth Layout
                    </h1>
                    <p>
                        fdkshfie akshdkusehd xaiohdikehnd kjhdiue
                    </p>
                    <p>
                        fdkshfie akshdkusehd xaioh kjhdiue
                    </p>
                </div>
                <div className='w-1/2'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout