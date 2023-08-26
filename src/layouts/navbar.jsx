import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isActive, setActive] = useState(false)

  return (
    <div className="flex justify-between items-center px-20 py-10">
      <a href="/" className="font-bold text-4xl uppercase">
        betsalel <span className="font-light">ships</span>
      </a>
      <ul className="flex">
        <li
          className={`${isActive ? 'bg-blue-400' : ''} px-2 border rounded-md`}
        >
          <NavLink
            to="/messages"
            style={({ isActive, isPending }) => {
              setActive(isActive)
            }}
          >
            Booking
          </NavLink>
        </li>
        <li className="mx-6">Services</li>
        <li className="ml-3 mr-6">Contact</li>
        <li>About</li>
      </ul>
    </div>
  )
}
