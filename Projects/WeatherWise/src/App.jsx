
// Weather App
// Features: Fetch weather data from an API and display current weather and forecast.
// Skills: API calls, state management, conditional rendering.


import React, { useState } from 'react';
import './App.css'
import { data } from 'autoprefixer';

function WeatherApp() {

  // state for city Name :
  const[city,setCity]=useState('')

  // State for btn:
  const[weather,setWeather]=useState(null)

  //State for Errors:
  const[error,setError]=useState(null)


  // To get data from text field 
  const handleInput=(e)=>{
   let data=(e.target.value)
   console.log(data)
     setCity(data)

  }

  const API_KEY = '78da56118c9f231d1a7949055f8afe23';

  // to get weather on btn presss:
  const getWeather=(e)=>{
    // to prevent default submission 
    e.preventDefault()
    setError('');
    setWeather(null);


    // Proceed only if city entered
    if(city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

    .then(response=>{
      if (!response.ok) {
        throw new error('City not found');
      }
      return response.json();
      
     } )

    .then (data=>
      setWeather(data))
      
     .catch(error=>setError("No Data"))

    }
    // incase no city enetered 
    else {
      setError("Please Enter City Name")

    }
  }

  return (
    <div className="weather-container">

      <input  type="text" 
      value={city} 
      onChange={handleInput}
      placeholder="Enter city name"  
       className="weather-input" />

      <button  className="weather-button"  onClick={getWeather}>Get Weather</button>

      {/* Displaying Weather info with condinational rendering  */}
      <div className="weather-info" id="weather-info">
        {/* Weather information will be displayed here */}
        {error && <p>{error}</p>}
        {weather &&
        <div>
           <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
          </div>
      
        }

      </div>
    </div>
  );
}

export default WeatherApp;
