import './App.css'
import Navbar from './layouts/navbar'
import Header from './components/header'
import { Service } from './components/Services'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="w-full">
      <Router>
        <Navbar />
        <Header />
        <Service />
      </Router>
    </div>
  )
}

export default App
