import Register from '../../assets/register.jpg'
import React, { useRef } from 'react'

const Signup = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmRef = useRef()

  const handleSignup = (e) => {
    e.preventDefault()
    const response = fetch('http://localhost:3000/api/register', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmRef.current.value,
      }),
    })

    console.log(response)
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
        </div>
      </div>
    </div>
  )
}

export default Signup
