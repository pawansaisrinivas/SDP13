import React from 'react';
import './style.css'; // Make sure to import your CSS file

export default function Home() {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={require('./Y2meta.app - 4K UHD Flying Above Clouds Live Wallpaper-(1080p).mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-container">
        <h1 className="animated-text">Welcome to WeatherQuill</h1>
      </div>
    </div>
  );
}
