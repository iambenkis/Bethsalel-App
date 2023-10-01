export function Service() {
  return (
    <div className="md:px-40 py-10" id="service">
      <div className="py-20 flex flex-col md:flex-row">
        <div className="w-[80%] mx-auto md:w-[50%]">
          <img src="phone.png" alt="register" />
        </div>
        <div className="w-[80%] shadow-xl mx-auto md:w-[50%] bg-blue-500 text-[#fff] rounded-b-[1rem] md:rounded-b-[4rem] px-10 py-20">
          <h1 className="font-medium text-2xl md:text-3xl py-2 mb-5">
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
      <div className="w-[80%] md:w-[60%] mx-auto md:py-20">
        <h1 className="font-extrabold px-4 py-2 text-4xl md:text-6xl mb-5">
          Choose us
        </h1>
        <p className="font-light">
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
