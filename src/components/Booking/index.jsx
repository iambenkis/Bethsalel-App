const Booking = () => {
  return (
    <div className={`home bg-cover bg-no-repeat w-full mt-20 backdrop-blur-sm`}>
      <div className=" w-full h-full bg-black/75">
        <div className="text-white flex justify-between items-center px-20 ml-20 mr-20">
          <form action="" className="bg-neutral-300 w-[45%]  mt-10">
            <h1 className="p-5 bg-white text-black text-xl">
              <span className="font-bold ">Book</span> your ticket
            </h1>
            <div className="p-5">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                 {' '}
                <label for="html" className="text-black text-xs">
                  Roundtrip
                </label>
                 <input type="radio" id="css" name="fav_language" value="CSS" />
                 {' '}
                <label for="css" className="text-black text-xs">
                  One way
                </label>
              </div>
              <input
                type="text"
                placeholder="Enter your Full name"
                className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                required
              />
              <select
                name="ships"
                id=""
                className="text-gray-400 w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                placeholder="Ship name"
              >
                <option value="Emmanuel 1">Emmanuel 1</option>
                <option value="Emmanuel 2">Emmanuel 2</option>
                <option value="Emmanuel 3">Emmanuel 3</option>
              </select>
              <div>
                <select
                  name="ships"
                  id=""
                  className="text-gray-400 w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                  placeholder="Ship class"
                >
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                </select>
              </div>
              <div className="flex justify-between text-gray-400 ">
                <input
                  type="date"
                  id="birthday"
                  className="mr-2 w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                  name="birthday"
                />
                <input
                  type="date"
                  className="w-full my-2 p-2 text-xs rounded-md bg-white border border-gray-400 focus:outline-none text-gray-400 focus:text-gray-600 focus:border-gray-500"
                  id="birthday"
                  name="birthday"
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
            <h1 className="font-medium text-6xl">Book your ticket </h1>
            <p className="italic text-6xl mt-2 font-thin">Easy online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
