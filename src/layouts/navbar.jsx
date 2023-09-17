import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'

export default function Navbar() {
  const [isActive, setActive] = useState(false)

  return (
    <div
      className="fixed z-100 left-0 top-0 flex w-full bg-white justify-between items-center px-40 py-5 pl-40"
      style={{
        zIndex: '100',
      }}
    >
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
            to="/booking"
            style={({ isActive, isPending }) => {
              setActive(isActive)
            }}
          >
            Booking
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink to="/" href="#service">
            Services
          </NavLink>
        </li>
        <li className="ml-3 mr-6">
          <NavLink to="/" href="#contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/" href="#about">
            About
          </NavLink>
        </li>
      </ul>
      <div>
        <CiUser className="text-xl cursor-pointer" />
      </div>
    </div>
  )
}
