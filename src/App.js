
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [query, setQuery] = useState({q: 'dhaka'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect( ()=>{

    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message.toUpperCase());
      await getFormattedWeatherData({...query, units}).then(data=>{
        toast.success(
          `Succesfully fetched weather for ${data.name}, ${data.country}`
        );
        setWeather(data)});
      
    };
    fetchWeather();
  } ,[query, units])

  const formatBackground = () =>{
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    
    return "from-yellow-700 to-orange-700";
  };
  
  return (
    <div className={`w-full h-full lg:mx-auto lg:max-w-screen-md lg:mt-4 py-5 lg:px-32 bg-gradient-to-br lg:h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButton setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default App;
