import React from 'react';
import './Weather.css';

export default function Weather(){
  return <div className='App'>
   <div id="time"></div>
    <h2 class="heading">WEATHER SEARCH</h2>   
    <form action="#" method="GET" class="form-input">
      <img src="https://www.freeiconspng.com/uploads/blue-location-icon-26.png" width="45" alt="icon-location" class="local-data"/>
      <input type="text" class="type-city" placeholder="type your city" name="city" value=""/>
      <input type="submit" class="search-button" value="SEARCH"/>
    </form>
   
  </div>;
}
