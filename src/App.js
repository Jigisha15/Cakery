import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Landingpage from './pages/Landingpage/Landingpage'

function App() {
  return (
    <div className="App">
      <Router>
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
        </Routes>
      </Router>
    </div>
  )
}

export default App
