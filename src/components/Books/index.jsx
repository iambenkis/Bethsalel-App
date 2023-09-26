import { useEffect, useState } from 'react'
import Profile from '../Profile'

const Books = () => {
  const name = 'Benjamin Kisenge'
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/reservations/${name}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.reservations))
      .catch((err) => console.log(err))
  }, [])

  books?.map((book) => console.log(book.boat))
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
