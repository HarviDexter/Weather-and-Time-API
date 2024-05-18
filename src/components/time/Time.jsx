import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./time.module.css";
import axios from "axios";

const Time = () => {
  const navigate = useNavigate("");
  const [city, setCity] = useState("");
  const [time, setTime] = useState(null);

  const fetchCityTime = async () => {
    try {
      const response = await axios.get(
        `http://worldtimeapi.org/api/timezone/Europe/${city}.json`
      );
      const cityTimeData = response.data.datetime; // Исправлено здесь
      setTime(cityTimeData);
    } catch (error) {
      console.log("Ошибка", error);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCityTime();
  };

  return (
    <div className={style.container}>
      <div className={style.container2}>
        <button onClick={() => navigate("/")}>Вернуться</button>
        <div>
          <h1> Узнай время в своем городе</h1>
          <input
            value={city}
            onChange={handleCityChange}
            type="text"
            placeholder="Введите Город"
          />
          <button onClick={handleSubmit}>Поиск</button> {/*Исправлено здесь*/}
          {time && (
            <p>
              Время в {city}:{new Date(time).toLocaleTimeString()}
            </p>
          )}{" "}
          {/*Исправлено здесь*/}
        </div>
      </div>
    </div>
  );
};

export default Time;
