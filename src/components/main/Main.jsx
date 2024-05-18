import React from "react";
import style from "../main/style.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  const weatherPerev = () => {
    window.location.href = "/weather";
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
          <h1>Tringle</h1>
        </div>
        <div className={style.section}>
          <button onClick={() => navigate("/weather")}> Узнать Погоду</button>

          <button> Узнать Время</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
