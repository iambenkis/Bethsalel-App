import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className={`home bg-cover bg-no-repeat w-full`}>
      <div className="z-10 w-full h-full bg-black/50">
        <div className="text-white flex flex-col justify-end  h-full px-20 pb-20">
          <h1 className="uppercase font-medium text-5xl">ready, now.</h1>
          <p className="text-5xl font-light mt-2 mb-10">Anywhere, Anytime</p>
          <NavLink
            to="/messages"
            className={`px-8 py-2 bg-blue-500 font-bold rounded-xl w-[12%] hover:bg-blue-500/75`}
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  )
}
