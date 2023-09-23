import { Radio } from "@material-tailwind/react";

const Booking = () => {
  return (
    <div className={`home bg-cover bg-no-repeat w-full `}>
      <div className=" w-full h-full bg-black/75 pt-20">
        <div className="text-white flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-20">
          <form action="" className="bg-neutral-300 shadow-xl w-[80%] md:w-[45%] mx-auto bg-white mt-10 p-6">
            <h1 className="p-5 bg-white text-black text-xl">
              <span className="font-bold ">Book</span> your ticket
            </h1>
            <div className="p-5">
              <div className="flex items-center text-xs">
                <Radio name="type" label="Roundtrip" defaultChecked/>
                <Radio name="type" label="One way"  />
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
            <h1 className="font-medium text-3xl md:text-6xl">Book your ticket </h1>
            <p className="italic text-3xl md:text-6xl mt-2 font-thin">Easy online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
