import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div class="nav">
      <h2>
        <NavLink
          to={'/'}
          className="a-link active"
        >
          Little Cakery
        </NavLink>
      </h2>
      <ul>
        <li>
          <NavLink
            to={'/'}
            className="a-link active"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className="a-link active"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/product'}
            className="a-link active"
          >
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/login'}
            className="a-link active"
          >
            LOGIN / REGISTER
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
