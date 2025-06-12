import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import FAQ from './pages/FAQ'
import Guides from './pages/Guides'
import Changelog from './pages/Changelog'
import './App.css'

export default function App() {
  return (
    <Router>
      <header className="nav">
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/signup">Sign Up</Link> |{' '}
          <Link to="/guides">Guides</Link> |{' '}
          <Link to="/faq">FAQ</Link> |{' '}
          <Link to="/changelog">Change Log</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      </main>
    </Router>
  )
}
