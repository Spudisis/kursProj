import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo";

const Header = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <Logo />
        <div className={s.list}>
          <NavLink to="/statement" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
            Подать заявление
          </NavLink>
          <NavLink to="/guide" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
            Управление
          </NavLink>
          <NavLink to="/press-center" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
            Пресс-центр
          </NavLink>
          <NavLink to="/activity" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
            Деятельность
          </NavLink>
          <NavLink to="/authorization" className={({ isActive }) => (!isActive ? s.activeProfile : s.inactiveProfile)}>
            Войти
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
