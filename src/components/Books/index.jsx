import { useEffect, useState } from 'react'
import Profile from '../Profile'
import jwt_decode from 'jwt-decode'

const Books = () => {
  const [name, setName] = useState('')
  const [books, setBooks] = useState([])
  const token = localStorage.getItem('bet_token')
  useEffect(() => {
    const name = jwt_decode(token).name
    console.log(name, "rsname")
    fetch(`http://localhost:3000/api/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }), 
      mode: 'cors'
    })
      .then((res) => {
        // console.log(res.json(), "jjj")
        return res.json()})
      .then((data) => setBooks(data.reservations))
      .catch((err) => console.log(err))
  }, [name])

  books?.map((book) => console.log(book.boat, "nnnn"))
  return (
    <div className="my-20 mx-40 ">
      <Profile />
      <div className="pt-10 mb-5">
        <h1 className="text-xl capitalize font-medium">Recent reservatons</h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          minima rerum ad officia amet. Ea qui, nihil deleniti ad asperiores cum
          velit, ex amet odit, non facere saepe! Illum consequatur veritatis
          eveniet architecto ex repellat magnam temporibus quod quia ratione?
        </p>
      </div>
      <ul className=" m-5 mx-10 grid gap-2">
        {books?.slice(0, 3).map((book) => (
          <li key={book.id} className="bg-gray-200">
            <a href="" className="p-4 flex justify-between">
              <div>
                <h3>Full name : {book.user.name}</h3>
                <h3>Ship name: {book.boat.name}</h3>
                <h3>Ship class: {}</h3>
              </div>
              <div>
                <h3>Trip Status: Round trip</h3>
                <h3>Departure date : 2023/7/21</h3>
                <h3>Return date: 2023/7/21</h3>
              </div>
              <div>
                <h3>Price: 46$</h3>
                <h3>Payment status: Paid</h3>
                <h3>Payment method: MTN MoMo</h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Books
