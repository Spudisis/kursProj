import React from "react";
import Logo from "../Logo/logo";
import s from "./footer.module.css";
import vkLogo from "../../assets/img/vk.png";

const Footer = () => {
  return (
    <footer>
      <div className={s.wid}>
        <div className={s.top}>
          <p>Телефон приёмной: 8 (831) 437-38-67 или 8 (831) 433-42-77</p>
          <p>Обратная связь: official@zags.kreml.nnov.ru</p>
          <p>Политика конфиденциальности</p>
        </div>
        <hr />
        <div className={s.bot}>
          <Logo />
          <div className={s.sites}>
            <p>Мы в соцсетях:</p>
            <a href="#" className={s.Icon}>
              <img src={vkLogo} alt="vk" className={s.vkIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
