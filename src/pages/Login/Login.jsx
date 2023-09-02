import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Navbar from '../../components/Navbar/Navbar'

const Login = () => {
  return (
    <div className="auth">
      <div className="wrap">
        <div className="login front"></div>
        <div className="register back"></div>
      </div>
    </div>
  )
}

export default Login
