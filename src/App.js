import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Landingpage from './pages/Landingpage/Landingpage'
import About from './pages/About/About'
import Product from './pages/Product/Product'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            Component={Login}
            path="/login"
          />
          <Route
            Component={Signup}
            path="/signup"
          />
          <Route
            Component={Landingpage}
            path="/"
          />
          <Route
            Component={About}
            path="/about"
          />
          <Route
            Component={Product}
            path="/product"
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
