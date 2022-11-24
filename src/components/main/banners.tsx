import React from "react";
import s from "./banners.module.css";
const Banners = () => {
  return (
    <div>
      <h2 className={s.nameBlock}>Баннеры</h2>
      <div className={s.listItems}>
        <div>
          <img
            src="https://zags.government-nnov.ru/upload/resize_cache/3e97ed0c0d07160748325c783d658565/1_351_134_fitted.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://zags.government-nnov.ru/upload/resize_cache/46a33c8307ea6c51c9e582bc88ec2627/zagruzhennoe_351_134_fitted.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://zags.government-nnov.ru/upload/resize_cache/5d10b4435b45910cb03569f05708ad12/600x600_351_134_fitted.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banners;
