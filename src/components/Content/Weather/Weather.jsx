import "./Weather.scss";
import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [isAppVisible, setIsAppVisible] = useState(false);
  const [isNewWeatherDataFetched, setIsNewWeatherDataFetched] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isErrorText, setIsErrorText] = useState("");

  const fetchWeatherData = async (cityName) => {
    const API_KEY = "4821680c37dd41ca95e85152230408";
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;

    try {
      setIsNewWeatherDataFetched(false);
      const response = await axios.get(url);
      setWeather(response.data);
      setIsNewWeatherDataFetched(true);
    } catch (error) {
      setIsErrorText(`Ошибка: ${error}`);
      setIsErrorVisible(true)
    }
  };

  return (
    <div className="weather-app">
    {isErrorVisible && (
  <div className="error-modal">
    <div className="error-modal-content">
      <h2>Ошибка</h2>
      <p>{isErrorText}</p>
      <button
        onClick={() => {
          setIsErrorVisible(false);
        }}
      >
        Закрыть
      </button>
    </div>
  </div>
)}
      {!isAppVisible ? (
        <button
          type="button"
          onClick={() => {
            setIsAppVisible(true);
          }}
        >
          Хотите узнать погоду?
        </button>
      ) : (
        <div className="fade-in">
          <h1>Приложение для прогноза погоды</h1>
          <div className="weather-input-label">
            <input
              type="text"
              id="city"
              placeholder="Введите название города"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <button
              id="submit-weather"
              type="button"
              onClick={() => fetchWeatherData(city)}
            >
              Получить погоду
            </button>
          </div>
          {weather && (
            <div
              id="weather-info-container"
              className={isNewWeatherDataFetched ? "fade-in" : ""}
            >
              <div id="weather-flex">
                <h2>Текущая погода:</h2>
                <img src={weather.current.condition.icon} alt="icon" />
              </div>
              <p>Город: {weather.location.name}</p>
              <p>Страна: {weather.location.country}</p>
              <p>Температура: {weather.current.temp_c}°C</p>
              <p>Состояние: {weather.current.condition.text}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Weather;
