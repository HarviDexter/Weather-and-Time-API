import React from "react";
import style from "../main/style.module.css";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
          <h1>Tringle</h1>
        </div>
        <div className={style.section}>
          <button onClick={() => navigate("/weather")}> Узнать Погоду</button>

          <button onClick={() => navigate("/time")}> Узнать Время</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
