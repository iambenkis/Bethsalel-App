import { Link, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Header() {
  return (
    <div className={`home bg-cover bg-no-repeat w-full`}>
      <div className="z-10 w-full h-full bg-black/75">
        <div className="text-white flex flex-col justify-end h-full px-6 md:px-20 pb-20 ml-20">
          <h1 className="uppercase font-medium text-3xl md:text-5xl">
            ready, now.
          </h1>
          <p className="text-3xl md:text-5xl font-light mt-2 mb-10">
            Anywhere, Anytime
          </p>
          <div className="flex items-center">
            <NavLink
              to="/booking"
              className={`px-6 py-2 bg-blue-500 font-bold rounded-xl w-[35%] md:w-[14%] hover:bg-blue-500/75`}
            >
              Book Now
            </NavLink>
            <p className="font-medium border-2 p-1 ml-2 rounded-xl">
              <Link to="/services">Our boats</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
