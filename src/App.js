import './App.css'
import Navbar from './layouts/navbar'
import Header from './components/header'
import { Service } from './components/Services'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './layouts/footer'
import Booking from './components/Booking'

function App() {
  return (
    <div className="w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Service />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
