import React from 'react'
import Capsules from './Capsules'
import { useCapsuleContext } from '../Contexts/capsules_context';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import PopCapsule from './PopCapsule';

const SearchForm = () => {
  const { capsules, page, isPopupOpen, openPopup, popCapsule, closePopup, handlePage, searchCapsule, search, filterCapsules, capsulesLoading } = useCapsuleContext();

  

return (
<div className=''>
      <div className="flex justify-center px-10 py-20">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="max-w-xl">
          <div className="flex space-x-4">
            <div className="flex rounded-md overflow-hidden w-full">
              <input type="text" name="search" className="w-full rounded-md outline-none border border-black p-5 text-3xl" value={search} placeholder='(type, status, launch......)' onChange={searchCapsule} />
            </div>
          </div>
        </div>
      </form>
      </div>
      {filterCapsules ? ( filterCapsules.map(capsule => {
        return (
      <Capsules key={capsule.capsule_serial} {...capsule} isPopupOpen={isPopupOpen} openPopup={openPopup}  />
        )})) :
        null
        }
        {popCapsule.map(capsule => {
          return (
        <PopCapsule key={capsule.capsule_serial} isPopupOpen={isPopupOpen} closePopup={closePopup} {...capsule} />    
          )})}
          {!capsulesLoading && (
          <div className="h-80 flex flex-wrap justify-center items-center">
              <button className="bg-black text-white py-2 px-4" onClick={() => handlePage('previous')}>
              <FaAngleLeft size={25}/>
              </button>
              {capsules.map((capsule, idx) => {
                return (
                  <button key={idx} className={`border md:mx-4 text-white py-2 px-4 ${page === idx ? 'bg-red-500' : 'bg-black'} border-gray-300 md:text-lg text-sm `}
                  onClick={() => handlePage(idx)}
                  >{idx + 1}</button>     
                )})}              
                <button className="bg-black text-white py-2 px-4" 
                onClick={() => handlePage('next')}>
                <FaAngleRight size={25} />
                 </button>
      </div>
          )}
      </div>
  )
}

export default SearchForm