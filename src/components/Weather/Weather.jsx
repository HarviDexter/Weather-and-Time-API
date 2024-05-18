import React, { useState } from "react";
import Style from "../Weather/Style.module.css";
import { useNavigate } from "react-router-dom";
const Weather = () => {
  const navigate = useNavigate();
  const apiKey = "c88c1f2b6686756664ac363069452c29";

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Ошибка", error);
    }
  };

  const formatWeatherData = (data) => {
    if (!data) return "Ошибка";

    const cityName = data.name;
    const temperature = data.main.temp;
    const formattedWeather = `Погода в ${cityName}: ${temperature.toFixed(
      0
    )} градусов Цельсия`;
    return formattedWeather;
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData();
    }
  };

  return (
    <div className={Style.container}>
      <div className={Style.section}>
        <button className={Style.btn} onClick={() => navigate("/")}>
          Вернуться
        </button>
        <h1 className={Style.zag}>Узнай погоду в своем городе</h1>
        <input
          className={Style.input}
          type="text"
          value={city}
          placeholder="введите Город"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={Style.btn} onClick={handleSearch}>
          Поиск
        </button>
        <h1>{weatherData && formatWeatherData(weatherData)}</h1>
      </div>
    </div>
  );
};

export default Weather;
