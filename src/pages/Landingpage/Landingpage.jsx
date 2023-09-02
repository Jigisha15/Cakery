import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img11 from '../../assets/img11.png'
import cake from '../../assets/img8.png'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import './Landingpage.css'

const Landingpage = () => {
  const images = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
  ]

  return (
    <>
      {/* <h1>Shree Ganesh</h1> */}
      <Navbar />
      <div className="landing-container">
        {/* <img
          src={img11}
          alt=""
          className="header"
        /> */}
      </div>
    </>
  )
}

export default Landingpage
