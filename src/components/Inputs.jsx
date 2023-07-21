import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function Inputs({units, setUnits, setQuery}) {
  const [city, setCity] = useState("");

  const handlerSearchClick = () =>{
    if(city !== '') setQuery({q: city})
    setCity('');
  }
  const handleLocationClick = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,
          lon
        })
      })
    }
  }
  const handleUnitChange = (e) =>{
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit) setUnits(selectedUnit);
  }
  return (
      <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
            <input 
            value={city}
            onChange={ e => setCity(e.currentTarget.value)}
            type="text"
            placeholder='Search for city...'
                  className="text-xl font-light p-2 w-48 md:w-80 lg:w-full rounded-lg shadow-xl focus:outline-none capitalize placeholder:lowercase transition ease-out hover:scale-105 mb-2"
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handlerSearchClick} />
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />
          </div>
          <div className="flex flex-row items-center justify-center w-1/4 space-x-1">
        <button name='metric' className="text-xl text-white font-light transition ease-out hover:scale-125" onClick={handleUnitChange}>°C</button>
            <p className="text-white text-xl">|</p>
        <button name='imperial' className="text-xl text-white font-light transition ease-out hover:scale-125" onClick={handleUnitChange}>°F</button>
          </div>
      </div>
  )
}

export default Inputs