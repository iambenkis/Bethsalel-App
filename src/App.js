import './App.css'
import Navbar from './layouts/navbar'
import Header from './components/header'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="w-full">
      <Router>
        <Navbar />
        <Header />
      </Router>
    </div>
  )
}

export default App
