import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
  const [ships, setShips] = useState([])
  const user = useRef()
  const ship = useRef()
  const shipClass = useRef()
  const departureDate = useRef()
  const arrivalDate = useRef()
  const roundTrip = useRef()
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:3000/api/boat')
      .then((res) => res.json())
      .then((data) => setShips(data.response))
      .catch((err) => console.log(err))
  }, [])

  const handleRequestTicket = async (e) => {
    e.preventDefault()
    const data = {
      userId: user.current.value,
      boatId: ship.current.value,
      boatClass: shipClass.current.value,
      departureDate: departureDate.current.value,
      returnDate: arrivalDate.current.value,
      isRoundtrip: roundTrip.current.value,
    }

    const username = '58a75be0-35cf-4140-bdce-fabce66976e6' // Replace with your actual username
    const password = 'f0116eeaa3734d42b29a939d7e420643' // Replace with your actual password
    const basicAuth = btoa(`${username}:${password}`)

    try {
      // Fetch the payment token from another endpoint (replace 'tokenEndpoint' with the actual URL)
      const tokenResponse = await fetch(
        'https://mtndeveloperapi.portal.mtn.co.rw/collection/token/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '8eb5b9ecff0b47f1b318475d5d2a28be',
            Authorization: `Basic ${basicAuth}`,
          },
          // Include any necessary data for token generation (e.g., user authentication)
          body: JSON.stringify({
            /* token generation data */
          }),
          mode: 'no-cors',
        },
      )
      console.log(tokenResponse)
    } catch (err) {
      // Handle errors
    }

    fetch('http://localhost:3000/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate('/profile')
      })
      .catch((err) => console.log(err))
    console.log(data)
  }
  // console.log(ships)
  return (
    <div className={`home bg-cover bg-no-repeat w-full mt-20 backdrop-blur-sm`}>
      <div className=" w-full h-full bg-black/75">
        <div className="text-white flex justify-between items-center px-20 ml-20 mr-20">
          <form
            action=""
            id="myForm"
            className="bg-neutral-300 w-[45%]  mt-10"
            onSubmit={(e) => handleRequestTicket(e)}
          >
            <h1 className="p-5 bg-white text-black text-xl">
              <span className="font-bold ">Book</span> your ticket
            </h1>
            <div className="p-5">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                  ref={roundTrip}
                />
                 {' '}
                <label for="html" className="text-black text-xs">
                  Roundtrip
                </label>
                 
                <input
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="CSS"
                  ref={roundTrip}
                />
                 {' '}
                <label for="css" className="text-black text-xs">
                  One way
                </label>
              </div>
              <input
                type="text"
                placeholder="Enter your Full name"
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
                name="name"
                ref={user}
              />
              <select
                name="ships"
                id=""
                className="text-gray-400 w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                placeholder="Ship name"
                ref={ship}
              >
                {ships?.map((ship) => (
                  <option value={ship.name}>{ship.name}</option>
                ))}
              </select>
              <div>
                <select
                  name="ships"
                  id=""
                  className="text-gray-400 w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                  placeholder="Ship class"
                  ref={shipClass}
                >
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                </select>
              </div>
              <div className="flex justify-between text-gray-400 ">
                <input
                  type="date"
                  id="birthday"
                  className="mr-2 w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                  name="birthday"
                  ref={departureDate}
                />
                <input
                  type="date"
                  className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                  id="birthday"
                  name="birthday"
                  ref={arrivalDate}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-md mt-3"
              >
                Get your ticket
              </button>
            </div>
          </form>
          <div>
            <h1 className="font-medium text-6xl">Book your ticket </h1>
            <p className="italic text-6xl mt-2 font-thin">Easy online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
