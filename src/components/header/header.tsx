import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo";
import menu from "../../assets/img/menuButton.svg";
import NavLinks from "../NavLinks/NavLinks";
import { debounce } from "lodash";
export type PopupClick = MouseEvent & {
  path: Node[];
};

const Header = () => {
  const popup = React.useRef<HTMLButtonElement>(null);
  const [visible, isVisible] = React.useState(false);

  React.useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      const _event = e as PopupClick;
      if (popup.current && !_event.path.includes(popup.current)) {
        isVisible(false);
      }
    };
    const handleMouseIn = (e: MouseEvent) => {
      const _event = e as PopupClick;
      if (popup.current && _event.path.includes(popup.current)) {
        isVisible(true);
      }
    };
    document.body.addEventListener("mouseover", handleMouseIn);
    document.body.addEventListener("click", handleClickOut);
    return () => {
      document.body.removeEventListener("click", handleClickOut);
      document.body.removeEventListener("mouseover", handleMouseIn);
    };
  }, []);
  return (
    <header>
      <div className={s.wrapper}>
        <Logo />
        <button className={s.menu} ref={popup} onClick={() => isVisible(!visible)}>
          <img src={menu} alt="menu" />
        </button>
        {visible && (
          <div className={s.listMenu}>
            <NavLinks />
          </div>
        )}
        <div className={s.list}>
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
