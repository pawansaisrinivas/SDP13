//WeatherCheck.js
import React, { useState, useEffect } from 'react';
import backgroundImage from './background.jpg'; // Import the background image

const WeatherCheck = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const apiKey = '335f3df6e3df9f6aec80e5610597026d';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (city.trim() !== '') {
      fetchWeatherData();
    }
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <div style={styles.overlay}>
          <div>
            <label htmlFor="cityInput" style={styles.label}>Enter City: </label>
            <input
              type="text"
              id="cityInput"
              value={city}
              onChange={handleCityChange}
              style={styles.input}
            />
          </div>
          {isLoading && <p>Loading...</p>}
          {error && <p style={styles.error}>Error: {error}</p>}
          {weatherData && (
            <div>
              <h2 style={styles.weatherHeading}>Weather in {weatherData.name}</h2>
              <p style={styles.weatherInfo}>Temperature: {weatherData.main.temp}°C</p>
              <p style={styles.weatherInfo}>Description: {weatherData.weather[0].description}</p>
              <p style={styles.weatherInfo}>Humidity: {weatherData.main.humidity}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '30px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    marginBottom: '20px',
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: '16px',
  },
  weatherHeading: {
    fontSize: '20px',
    marginTop: '20px',
  },
  weatherInfo: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};

export default WeatherCheck;
