export const Footer = () => {
  return (
    <footer className="px-20 py-10 bg-zinc-800 text-white" id="about">
      <div className="px-20 flex w-full justify-between">
        <div>
          <h3 className="font-bold">About</h3>
          <ul className="py-2 text-gray-400">
            <li className="py-1">Phone +2503865032</li>
            <li className="py-1">Phone +2503865032</li>
            <li className="py-1">Email benkisenge03@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Address</h3>
          <ul className="py-2 text-gray-400">
            <li className="py-1">DRC/Goma , Himbi 1, N 13</li>
            <li className="py-1">DRC/Bukavu , Fizi, N 13</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Keep Informed</h3>
          <form className="py-2 w-full">
            <input
              type="text"
              placeholder="Enter your Full name"
              className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
              required
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400  focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md mt-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
