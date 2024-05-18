import React from "react";
import style from "../main/style.module.css";
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
          <h1>Tringle</h1>
        </div>
        <div className={style.section}>
          <button> Узнать Погоду</button>
          <button> Узнать Время</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
