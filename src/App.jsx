import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './page/Home'
import About from './page/About'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/Login'


const App = () => {
  return (
    <div className='flex justify-center text-blue-700 '>
      <Routes >
        <Route element={<RootLayout />}>
          <Route path="/" element={< Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={< Login />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default App