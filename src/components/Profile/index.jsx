import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Profile = ({data}) => {

  const books = data.books
  console.log(data, "books")
  return (
    <div className="pt-10 w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <AiOutlineUser className="bg-gray-800 text-gray-400 font-medium w-40 h-40 rounded-full " />
          </div>
          <div className="ml-10">
            <h3 className="font-medium text-xl">{data[0].user.name}</h3>
            <p className="text-sm text-gray-400">{data[0].user.email}</p>
            <p className="text-sm">{data.length} reservations</p>
          </div>
        </div>
        <Link
          to="/update"
          className="border border-gray-100 py-1 text-sm px-4 rounded-lg hover:bg-gray-200 bg-gray-100"
        >
          Update profile
        </Link>
      </div>
    </div>
  )
}

export default Profile
