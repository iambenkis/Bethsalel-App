import { useEffect, useState } from 'react'
import Profile from '../Profile'
import jwt_decode from 'jwt-decode'

const Books = () => {
  const [name, setName] = useState('')
  const [books, setBooks] = useState([])
  const token = localStorage.getItem('bet_token')
  const [elementsWithMostRecentDate, setElementsWithMostRecentDate] = useState(
    [],
  )
  useEffect(() => {
    const name = jwt_decode(token).name
    console.log(name, 'rsname')
    fetch(`http://localhost:3000/api/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
      mode: 'cors',
    })
      .then((res) => {
        // console.log(res.json(), "jjj")
        return res.json()
      })
      .then((data) => setBooks(data.reservations))
      .catch((err) => console.log(err))
  }, [name])

  useEffect(() => {}, [books])

  books?.map((book) => console.log(book.departureDate, 'nnnn'))
  // console.log(books.createdAt, 'books')
  return (
    <div className="my-20 mx-40 ">
      <Profile data={books} />
      <div className="pt-10 mb-5">
        <h1 className="text-xl capitalize font-medium">Recent reservatons</h1>
        <p className="text-sm text-gray-400">
          Here you are going to find your recent books history. 
        </p>
      </div>
      <ul className=" m-5 mx-10 grid gap-2">
        {books.map((book) => (
          <li key={book.id} className={`${
            new Date(book.departureDate) < new Date() ? 'bg-gray-700 ': 'bg-gray-200'
            // console.log(new Date(book.departureDate), "date")
          }`}>
            <a href="#" className="p-4 flex justify-between">
              <div>
                <h3>Full name : {book.user.name}</h3>
                <h3>Ship name: {book.boat.name}</h3>
                <h3>Ship class: {book.boatClass}</h3>
              </div>
              <div>
                {book.isRoundtrip === 'roundtrip' ? (
                  <div>
                    <h3>Trip Status: Round trip</h3>
                    <h3>Departure date : {book.departureDate}</h3>
                    <h3>Return date: {book.returnDate}</h3>
                  </div>
                ) : (
                  <div>
                    <h3>Trip Status: One way</h3>
                    <h3>Departure date : {book.departureDate}</h3>
                    <h3>Return date: {'-'}</h3>
                  </div>
                )}
              </div>
              <div>
                <h3>Price: {
                  book.boat.name === 'Emmanuel 1' ? '25' : book.boat.name ===  'Emmanuel 2' ? '15' : '30'
                  }
                </h3>
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
