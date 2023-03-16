
const PopCapsule = ({ capsule_id: id, missions, original_launch_unix: unix, reuse_count, landings, isPopupOpen, closePopup }) => {

      return (
      <div
        className={`relative rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 w-2/4 mx-auto ${isPopupOpen ? 'block' : 'hidden'}`}
        role="alert"
      >
        <div className="flex items-center gap-4">

          <p className="font-medium sm:text-lg">Details:</p>
        </div>
        <ul className='text-lg'>
          <li>CapsuleID: {id}</li>
          <li>Landing: {landings}</li>
          <li>Reuse Count: {reuse_count}</li>
          <li>Original Launch Unix: {unix}</li>
          {missions.map((mission, idx) => {
            return (
              <span key={idx}>
              <li>Name: {mission.name}</li>
              <li>Flight: {mission.flight}</li>
              </span>
              
            )
          })}
        </ul>
        <button
          className="absolute -top-1 -right-1 rounded-full border border-gray-300 bg-gray-100 p-1" onClick={closePopup}>
          <span class="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

      </div>
  )
}

export default PopCapsule