import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Logout } from '../redux/login'

const axiosConfig = {
  method: 'GET', // Specify the HTTP method (GET, POST, etc.)
  url: 'http://localhost:3000/api/login', // Specify the API endpoint
  mode: 'cors', // Set CORS mode to 'cors'
}

export default function Navbar() {
  const [isActive, setActive] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.login)
  const [name, setName] = useState('')
  const [activeMenu, setActiveMenu] = useState(false)
  const token = localStorage.getItem('bet_token')

  axios.defaults.withCredentials = true

  useEffect(() => {
    try {
      // const token = localStorage.getItem('bet_token')
      const name = jwt_decode(token).name
      const firstNameInitial = name.split(' ')[0].charAt(0)
      const lastNameInitial = name.split(' ')[1].charAt(0)
      if (token === null) {
        navigate('/login')
      }
      setName(name)
    } catch (error) {
      // navigate('/login')
    }
  }, [state.isAuthenticated])

  const handleMenu = () => {
    setActiveMenu(!activeMenu)
  }

  const handleLogout = () => {
    dispatch(Logout())
    console.log('logout')
    setName('')
    navigate('/login')
  }

  console.log(state, 'nav')
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
      <div className="relative">
        {name ? (
          <div className="flex cursor-pointer" onClick={() => handleMenu()}>
            <p className="text-sm mr-2">{name}</p>
            <FaCaretDown className="text-xl " />
          </div>
        ) : (
          <CiUser
            className="text-xl cursor-pointer"
            onClick={() => navigate('/signup')}
          />
        )}
        {activeMenu && name && (
          <div className="absolute w-60 top-7">
            <ul>
              <li className="py-2 px-4 bg-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white">
                {name}
              </li>
              <li
                onClick={() => handleLogout()}
                className="py-2 px-4 bg-gray-100 cursor-pointer hover:bg-gray-800 hover:text-white"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
