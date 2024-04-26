import React, { useState } from 'react';
import { EmojiObjects as LightbulbIcon, WbSunny as SunnyIcon, BeachAccess as BeachIcon } from '@mui/icons-material';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    backgroundColor: isHovered ? '#f0f0f0' : '#f7f7f7',
    borderRadius: '25px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    width: '80%',
    maxWidth: '600px',
  };

  const cardContentStyles = {
    lineHeight: '1.6',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px', // Adjusted font size
    color: '#333',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div
        style={cardStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={cardContentStyles}>
          <h2 style={{ color: '#555', fontSize: '24px', marginBottom: '20px' }}>Welcome to WeatherQuill!!</h2>
          <p>
            WeatherQuill is your ultimate destination for weather forecasts, insights, and more. Our platform brings you accurate, hyper-localized weather predictions to help you plan your day with confidence. <LightbulbIcon />🌞
          </p>
          <p>
            With WeatherQuill, you can explore a wide range of weather data, including temperature, humidity, wind speed, and more. Our user-friendly interface makes it easy to access this information and stay informed about weather conditions in your area. <SunnyIcon />🏖️
          </p>
          <p>
            Whether you're planning outdoor activities, traveling, or just curious about the weather, WeatherQuill has you covered. Join us today and discover a new way to experience weather forecasts! <BeachIcon />⛅
          </p>
          <p>
            Ready to get started? Sign up now to unlock premium features and personalize your weather experience.
          </p>
        </div>
      </div>
    </div>
  );
}
