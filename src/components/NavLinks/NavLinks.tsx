import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavLinks.module.css";
const NavLinks = () => {
  const [auth, setAuth] = React.useState(true);
  return (
    <>
      {auth ? (
        <NavLink to={"/statement"} className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
          Подать заявление
        </NavLink>
      ) : (
        <NavLink to={"/authorization"} className={s.active}>
          Подать заявление
        </NavLink>
      )}
      <NavLink to="/guide" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
        Управление
      </NavLink>
      <NavLink to="/press-center" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
        Пресс-центр
      </NavLink>
      <NavLink to="/activity" className={({ isActive }) => (!isActive ? s.active : s.inactive)}>
        Деятельность
      </NavLink>
      {!auth ? (
        <NavLink to="/authorization" className={({ isActive }) => (!isActive ? s.activeProfile : s.inactiveProfile)}>
          Войти
        </NavLink>
      ) : (
        <NavLink to="/profile" className={({ isActive }) => (!isActive ? s.activeProfile : s.inactiveProfile)}>
          Профиль
        </NavLink>
      )}
    </>
  );
};

export default NavLinks;
