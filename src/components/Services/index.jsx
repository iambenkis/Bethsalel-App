export function Service() {
  return (
    <div className="md:px-40 py-10" id="service">
      <div className=" flex">
        <div className="w-[50%]">
          <img src="phone.png" alt="register" />
        </div>
        <div className="w-[50%]">
          <h1 className="font-medium px-4 py-2 mb-5">
            What we offer
          </h1>
          <p className="font-light">
            Our website offers a range of features designed to simplify your
            billing processes. You can generate detailed bills and invoices with
            just a few clicks, ensuring accurate and transparent financial
            records.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="border font-medium px-4 py-2 border-black rounded-xl mb-5">
          Choose us
        </h1>
        <p className="font-light text-center">
          Choose us Whether you are a shipping company, a travel agency, or an
          individual looking to reserve a ship, our website streamlines the
          billing process, saving you time and effort. Experience the
          convenience and efficiency of our ship reservation bills website and
          embark on a hassle-free journey with us.
        </p>
      </div>
    </div>
  )
}
