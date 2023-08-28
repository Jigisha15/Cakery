import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div class="nav">
      <h2>
        <NavLink
          href="index.html"
          className="a-link"
        >
          Little Cakery
        </NavLink>
      </h2>
      <ul>
        <li>
          <NavLink
            href="index.html"
            className="a-link"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            href="about.html"
            className="a-link"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            href="products.html"
            className="a-link"
          >
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink
            href="login.html"
            className="a-link"
          >
            LOGIN / REGISTER
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
