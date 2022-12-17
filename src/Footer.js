import React from 'react';
import './Footer.css';

export default function Footer(){
  return <div className='footer-container'>
    <p>This project was coded for 
      <a href="https://www.shecodes.io/"  target="_blank"> SheCodes </a>
       and is open-sourced on 
      <a href="https://github.com/VlaRu" target="_blank">
        <img src="https://vermillion-souffle-27bbf8.netlify.app/src/github-icon.svg" alt="github-icon" width="15" height="15"/> GitHub
      </a>
    </p>
   
  </div>;
}