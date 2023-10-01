import './App.css'
import NavbarDefault from './layouts/navbar'
import Header from './components/header'
import { Service } from './components/Services'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './layouts/footer'
import Booking from './components/Booking'
import Signup from './components/signup'
import Login from './components/login'
import Protected from './protected'
import Books from './components/Books'
import UpdateProfile from './components/Update'
import Boat from './components/Boats'

function App() {
  return (
    <div className="w-full">
      <Router>
        <NavbarDefault />
        <Routes>
          <Route
            path="/booking"
            element={
              <Protected>
                <>
                  {' '}
                  <Booking />
                  <Footer />
                </>
              </Protected>
            }
          />
          <Route
            path="/"
            element={
              <Protected>
                <>
                  {' '}
                  <Header />
                  <Service />
                  <Footer />
                </>
              </Protected>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/profile"
            element={
              <Protected>
                <>
                  {' '}
                  <Books />
                  <Footer />
                </>
              </Protected>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/update"
            element={
              <Protected>
                <UpdateProfile />
              </Protected>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/services"
            element={
              <Protected>
                <Boat />
              </Protected>
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
