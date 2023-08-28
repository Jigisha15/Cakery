import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div class="footer">
      <h3>Little Cakery</h3>
      <p class="p1">
        We serve delicious pasteries, puffs, breads, cakes and much more with
        love...
      </p>
      <div class="icons">
        <span>
          <i class="fa-brands fa-facebook"></i>
        </span>
        <span>
          <i class="fa-brands fa-instagram"></i>
        </span>
        <span>
          <i class="fa-regular fa-envelope"></i>
        </span>
        <span>
          <i class="fa-solid fa-phone"></i>
        </span>
        <span>
          <i class="fa-solid fa-location-dot"></i>
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        quia quae deleniti ab nesciunt sit cupiditate temporibus, sint libero
        delectus!
      </p>
      <h2>
        Developed by :
        <a
          href="https://portfolio-jigisha15.vercel.app/"
          target="_blank"
        >
          Jigisha Ghanekar
        </a>
      </h2>
    </div>
  )
}

export default Footer
