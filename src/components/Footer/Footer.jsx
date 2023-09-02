import React from 'react'
import { Link } from 'react-router-dom'

import { TiSocialPinterest } from 'react-icons/ti'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { TiSocialTwitter } from 'react-icons/ti'

import './Footer.css'

const Footer = () => {
  return (
    <div class="footer">
      <h3>Little Cakery</h3>
      <p class="p1">
        We serve delicious pasteries, puffs, breads, cakes and much more with
        love...
      </p>
      {/* <div class="icons">
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
      </div> */}
      <p>
        <ul className="social">
          <li>
            <Link classname="social-icons">
              <TiSocialPinterest
                size={32}
                color="white"
              />
            </Link>
          </li>
          <li>
            <Link classname="social-icons">
              <SlSocialInstagram
                size={20}
                color="white"
              />
            </Link>
          </li>
          <li>
            <Link classname="social-icons">
              <SlSocialYoutube
                size={25}
                color="white"
              />
            </Link>
          </li>
          <li>
            <Link classname="social-icons">
              <TiSocialTwitter
                size={30}
                color="white"
              />
            </Link>
          </li>
        </ul>
      </p>
      <h2>
        Developed by :
        <a
          href="https://portfolio-jigisha15.vercel.app/"
          target="_blank"
        >
          {' '}
          Jigisha Ghanekar
        </a>
      </h2>
    </div>
  )
}

export default Footer
