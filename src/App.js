import './App.css'
import NavbarDefault from './layouts/navbar'
import Header from './components/header'
import { Service } from './components/Services'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './layouts/footer'
import Booking from './components/Booking'
import Signup from './components/signup'
import Login from './components/login'

function App() {
  return (
    <div className="w-full">
      <Router>
        <NavbarDefault />
        <Routes>
          <Route
            path="/booking"
            element={
              <>
                <Booking />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Service />
                <Footer />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
