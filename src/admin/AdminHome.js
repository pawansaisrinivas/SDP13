import React from 'react';
import myImage from './image.png'; // Adjust the path based on the actual location of your image
import './home.css';

export default function AdminHome() {
  return (
    <div className="home-container">
      <img src={myImage} alt="My Image" className="background-image" />
    </div>
  );
}
