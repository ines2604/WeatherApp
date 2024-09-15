import './App.css';
import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Header from './components/Header';
import Alert from './components/Alert';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const api = {
    base: 'https://api.openweathermap.org/data/2.5/weather',
    key: '1d26387bf24cdf9239463c0604ad88f5'
  };

  function searchPress(e) {
    e.preventDefault();
    setError(null); // Clear previous errors
    fetch(`${api.base}?q=${city}&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then(result => {
        if (result.cod === 200) {
          setWeather(result);
        } else {
          setWeather(null);
          setError(result.message || "City not found");
        }
      })
      .catch(() => {
        setError("An error occurred. Please try again.");
      });
  }

  return (
    <div className="App">
      <Header city={city} setCity={setCity} searchPress={searchPress} />
      {error && <Alert message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
