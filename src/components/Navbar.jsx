import React from 'react'
import { NavLink } from 'react-router-dom'

const navClass = ({ isActive }) =>
  isActive
    ? "underline underline-offset-4 font-semibold"
    : "hover:underline hover:underline-offset-4"

const Navbar = () => {
  return (
    <nav className='flex justify-between container mx-auto px-20 py-4'>
      <div className='flex gap-6'>
        <NavLink to="/" end className={navClass}>Home</NavLink>
        <NavLink to="/About" className={navClass}>About</NavLink>
        <NavLink to="/Products" className={navClass}>Products</NavLink>
      </div>
      <div className='flex gap-5'>
        <NavLink to="/Login" className={navClass}>Sign in</NavLink>
        <NavLink to="/Register" className={navClass}>Sign up</NavLink>
      </div>
    </nav>
  )
}

export default Navbar