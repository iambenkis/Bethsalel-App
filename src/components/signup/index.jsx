import Register from '../../assets/register.jpg'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()
  const navigate = useNavigate()

  const handleSignup = (e) => {
    console.log('hello')
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmRef.current.value,
    }
    e.preventDefault()
    fetch('http://localhost:3000/api/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'User registered successfully') {
          navigate('/login')
        }
      })
      .catch((error) => {
        console.log('Error parsing JSON:', error)
      })

    e.target.reset()
  }

  return (
    <div className={`signup bg-cover bg-no-repeat w-full backdrop-blur-sm`}>
      <div className="relative w-full h-full bg-black/75 flex justify-center items-center  pt-20">
        <div className="text-white flex bg-white absolute w-[60%] h-[70%]  items-center  p-10">
          <img
            src={Register}
            alt="img"
            className="w-[50%] h-full border rounded-3xl"
          />
          <div>
            <form className="px-10" onSubmit={handleSignup}>
              <h1 className="text-black text-2xl font-bold">Welcome back</h1>
              <p className="text-black">For new users</p>
              <input
                type="text"
                placeholder="Full name"
                ref={nameRef}
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
              />
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
              />
              <input
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
              />
              <input
                type="password"
                placeholder="Confirm your password"
                ref={confirmRef}
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-md mt-3 uppercase text-xs font-medium"
              >
                Sign up
              </button>
            </form>
          </div>
          <p className="text-black absolute right-5 top-5 text-sm">
            Already have an account ?{' '}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
