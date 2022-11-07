import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import s from "./NavLinks.module.css";
import { auth } from "../../firebase/config";
const NavLinks = () => {
  const [user, loading, error] = useAuthState(auth as any);
  return (
    <>
      {user ? (
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
      {!user ? (
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
