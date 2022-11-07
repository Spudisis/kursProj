import React from "react";
import { Link } from "react-router-dom";
import s from "./statementLinks.module.css";
const StatementLinks = () => {
  return (
    <div className={s.wrapper}>
      <h2>Подать заявление</h2>
      <div className={s.links}>
        <Link to="bornRegistration">Регистрация рождения ребенка</Link>
        <Link to="marriage">Регистрация брака</Link>
        <Link to="divorce">Расторжение брака</Link>
        <Link to="death">Регистрация смерти</Link>
      </div>
    </div>
  );
};

export default StatementLinks;
