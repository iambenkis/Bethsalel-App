import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isActive, setActive] = useState(false)

  return (
    <div className="flex w-full justify-between items-center px-20 py-7">
      <a href="/" className="font-bold text-4xl uppercase">
        betsalel <span className="font-light ">ships</span>
      </a>
      <ul className="flex ml-[5%] mr-[10%]">
        <li
          className={`${
            isActive ? 'bg-blue-400 text-white' : ''
          } px-4 border rounded-md`}
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
        <li className="mx-6">
          <a href="#">Services</a>
        </li>
        <li className="ml-3 mr-6">
          <a href="#">Contact</a>
        </li>
        <li>About</li>
      </ul>
    </div>
  )
}
