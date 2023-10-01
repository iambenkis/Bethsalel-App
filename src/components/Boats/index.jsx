import React, { useState, useEffect } from 'react'

const Boat = () => {
  const [boats, setBoats] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/boat')
      .then((res) => res.json())
      .then((data) => setBoats(data.response))
      .catch((err) => console.log(err))
  }, [])

  console.log(boats)

  return (
    <div className="my-40  mx-40 ">
      {/* <h1>Boat</h1> */}
      <ul className="flex w-full items-center justify-between flex-wrap">
        {boats?.map((boat) => (
          <li className="w-[30%] h-[10rem] mb-60">
            <img
              className="w-full h-full object-cover rounded-xl"
              alt="boat-name"
              src={`http://localhost:3000/${boat.image}`}
            />
            <h1 className="font-medium capitalize mt-1">{boat.name}</h1>
            <p className="text-sm">{boat.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Boat
