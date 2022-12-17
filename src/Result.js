import React from 'react';
import './Result.css';

export default function Result(){
  return <div className='main-degree-container'>
   <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon-weather" class="icon-weather"/>
    <div class="degree-container">
      <h1 class="city">New York</h1>
      <span id="degree">10 </span><span class="c" onclick="getCelsius()">°</span> | <span class="f" onclick="getFahrenheit()">F</span>
    </div>
    <div class="description-weather">
      <p >Humidity: <span class="humidity"></span> %</p>
      <p >Wind: <span class="wind"></span> km/h</p>  
    </div>  
  </div>;
}