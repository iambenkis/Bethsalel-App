import './App.css'
import Navbar from './layouts/navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
      </Router>
    </div>
  )
}

export default App
