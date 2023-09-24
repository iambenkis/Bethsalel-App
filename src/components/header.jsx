import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Header() {
  return (
    <div className={`home bg-cover bg-no-repeat w-full mt-20`}>
      <div className="z-10 w-full h-full bg-black/75">
        <div className="text-white flex flex-col justify-end  h-full px-20 pb-20 ml-20">
          <h1 className="uppercase font-medium text-5xl">ready, now.</h1>
          <p className="text-5xl font-light mt-2 mb-10">Anywhere, Anytime</p>
          <NavLink
            to="/booking"
            className={`px-8 py-2 bg-blue-500 font-bold rounded-xl w-[14%] hover:bg-blue-500/75`}
          >
            Book Now
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
