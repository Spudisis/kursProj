import s from "./logo.module.css";
import { NavLink } from "react-router-dom";
import emblem from "../../assets/img/emblem.png";

function Logo() {
  return (
    <NavLink to="/">
      <div className={s.place}>
        <div>
          <img src={emblem} alt="NN" className={s.logo} />
        </div>
        <div className={s.name}>
          <h1>ЗАГС Нижегородской&nbsp;области</h1>
          <h1>ЗАГС</h1>
        </div>
      </div>
    </NavLink>
  );
}

export default Logo;
