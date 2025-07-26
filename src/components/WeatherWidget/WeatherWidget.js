import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    temperature: 72,
    condition: 'Sunny',
    location: 'San Francisco, CA',
    icon: '☀️',
    forecast: [
      { day: 'Wed', temp: 73, icon: '☀️' },
      { day: 'Thu', temp: 70, icon: '⛅' },
      { day: 'Fri', temp: 68, icon: '🌧️' },
      { day: 'Sat', temp: 71, icon: '⛅' },
    ]
  });

  // In a real app, you would fetch weather data from an API
  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     try {
  //       const response = await fetch('your-weather-api-url');
  //       const data = await response.json();
  //       setWeather(data);
  //     } catch (error) {
  //       console.error('Error fetching weather data:', error);
  //     }
  //   };
  //
  //   fetchWeather();
  // }, []);

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <div className="weather-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span>{weather.location}</span>
        </div>
        <span className="weather-date">Today</span>
      </div>
      
      <div className="weather-current">
        <div className="weather-icon">{weather.icon}</div>
        <div className="weather-info">
          <div className="weather-temperature">{weather.temperature}°F</div>
          <div className="weather-condition">{weather.condition}</div>
        </div>
      </div>
      
      <div className="weather-forecast">
        {weather.forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <span className="forecast-label">{day.day}</span>
            <span className="forecast-icon">{day.icon}</span>
            <span className="forecast-temp">{day.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
