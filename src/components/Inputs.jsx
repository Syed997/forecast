import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function Inputs() {
  return (
      <div className="flex flex-row justify-center my-6">
          <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input 
            type="text"
            placeholder='Search for city...'
                  className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase transition ease-out hover:scale-105"
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
              <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
          </div>
          <div className="flex flex-row items-center justify-center w-1/4 space-x-2">
            <button name='matric' className="text-xl text-white font-light">°C</button>
            <p>|</p>
            <button name='matric' className="text-xl text-white font-light">°F</button>
          </div>
      </div>
  )
}

export default Inputs