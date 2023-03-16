
const Capsules = ({ capsule_serial: serial, details, status, isPopupOpen, openPopup, type, original_launch: launch }) => {

  return (
    <>

      <div className={`group relative mx-auto mb-10 h-64 sm:h-80 lg:h-96 w-80 ${isPopupOpen ? 'hidden' : 'block'} `}>
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>

        <div
          className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        >
          <div
            className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
          >
            <h2 className='text-3xl'>Capsule: {serial}</h2>
                  <h3 className="mt-4 font-medium text-lg">
                    Type: {type}
                  </h3>
                  <h3 className="mt-4 font-medium text-lg">
                    Status: {status}
                  </h3>
                  <h3 className="mt-4 font-medium text-lg">
                    Original Launch: {launch}
                  </h3>
          </div>

          <div
            className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
          >
            <h3 className=" text-2xl">
              {details}
            </h3>

            <button className="mt-10 bg-black rounded-md text-sm px-4 py-4" onClick={() => openPopup(serial)}>For more details</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Capsules