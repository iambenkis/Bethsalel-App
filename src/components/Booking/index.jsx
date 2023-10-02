import { Radio } from '@material-tailwind/react'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [ships, setShips] = useState([])
  const user = useRef()
  const ship = useRef()
  const shipClass = useRef()
  const departureDate = useRef()
  const arrivalDate = useRef()
  const roundTrip = useRef()
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate_r, setSelectedDate_r] = useState(null);
  const startDate = new Date("2023-10-01"); 
  const [selectedStatus, setSelectedStatus] = useState('roundtrip')
  const handleOptionChange = (event) => {
    setSelectedStatus(event.target.value)
  }
  useEffect(() => {
    fetch('http://localhost:3000/api/boat')
      .then((res) => res.json())
      .then((data) => setShips(data.response))
      .catch((err) => console.log(err))
  }, [])

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/reservations')
      const data = await response.json()
      setBooks(data.response)
      setLoading(false)
    }
    fetchUsers()
  }, [])

  console.log(books.length, "books")

  const handleRequestTicket = async (e) => {
    e.preventDefault()
    const data = {
      userId: user.current.value,
      boatId: ship.current.value,
      boatClass: shipClass.current.value,
      departureDate: selectedDate,
      returnDate: selectedDate_r,
      isRoundtrip: selectedStatus,
    }

    // const username = '58a75be0-35cf-4140-bdce-fabce66976e6' // Replace with your actual username
    // const password = 'f0116eeaa3734d42b29a939d7e420643' // Replace with your actual password
    // const basicAuth = btoa(`${username}:${password}`)

    // try {
    //   // Fetch the payment token from another endpoint (replace 'tokenEndpoint' with the actual URL)
    //   const tokenResponse = await fetch(
    //     'https://mtndeveloperapi.portal.mtn.co.rw/collection/token/',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Ocp-Apim-Subscription-Key': '8eb5b9ecff0b47f1b318475d5d2a28be',
    //         Authorization: `Basic ${basicAuth}`,
    //       },
    //       // Include any necessary data for token generation (e.g., user authentication)
    //       body: JSON.stringify({
    //         /* token generation data */
    //       }),
    //       mode: 'no-cors',
    //     },
    //   )
    //   console.log(tokenResponse)
    // } catch (err) {
    //   // Handle errors
    // }

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
    <div className={`home bg-cover bg-no-repeat w-full `}>
      <div className=" w-full h-full bg-black/75 pt-20">
        <div className="text-white flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-20">
          <form
            action=""
            id="myForm"
            className="bg-neutral-300 shadow-xl w-[80%] md:w-[45%] mx-auto bg-white mt-10 p-6"
            onSubmit={(e) => handleRequestTicket(e)}
          >
            <h1 className="p-5 bg-white text-black text-xl">
              <span className="font-bold ">Book</span> your ticket
            </h1>
            <div className=" px-2 py-5">
              <div className="flex items-center text-xs">
                <Radio
                  name="type"
                  id="html"
                  label="Roundtrip"
                  value="roundtrip"
                  defaultChecked
                  ref={roundTrip}
                  checked={selectedStatus === 'roundtrip'}
                  onChange={handleOptionChange}
                />
                 
                <Radio
                  type="radio"
                  id="css"
                  value="one way"
                  name="type"
                  label="One way"
                  checked={selectedStatus === 'one way'}
                  onChange={handleOptionChange} 
                />
                <p className='font-medium pl-[1px] text-xl text-black'>|</p>
                <Radio
                  type="radio"
                  id="css" 
                  name='d'
                  label="Day 8AM" 
                />
                <Radio
                  type="radio"
                  id="css" 
                  name='d'
                  label="Night 5PM" 
                />
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
                <DatePicker  
                  className="mr-2 w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                  ref={departureDate}
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  dateFormat='dd/MM/yyy'
                  minDate={new Date()}
                  placeholderText="You want to go on ?"
                />
                <DatePicker
                  className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-black focus:text-gray-600 focus:border-gray-500"
                  selected={selectedDate_r}
                  onChange={date => setSelectedDate_r(date)}
                  dateFormat='dd/MM/yyy'
                  ref={arrivalDate}
                  minDate={selectedDate}
                  placeholderText="You'll return on ?"
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
            <h1 className="font-medium text-3xl md:text-6xl">
              Book your ticket{' '}
            </h1>
            <p className="italic text-3xl md:text-6xl mt-2 font-thin">
              Easy online
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
