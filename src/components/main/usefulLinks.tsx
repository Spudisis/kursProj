import React from "react";
import s from "./usefulLinks.module.css";
export const UsefulLinks = () => {
  return (
    <div>
      <h2 className={s.nameBlock}>Полезные ссылки</h2>
      <div className={s.listLinks}>
        <div className={s.item}>
          <img
            className={s.item_img}
            src="https://zags.government-nnov.ru/upload/resize_cache/63d41f01df7dddb1c4101af6f2742a1c/Glavnoe-upravlenie-Minyusta-Rossii-po-NO_60_60_fitted.png"
            alt=""
          />
          <div className={s.info}>
            <h3 className={s.nameInfo}>Главное управление Минюста России по Нижегородской области</h3>
            <a className={s.linkInfo} href="">
              to52.minjust.gov.ru
            </a>
          </div>
        </div>
        <div className={s.item}>
          <img
            className={s.item_img}
            src="https://zags.government-nnov.ru/upload/resize_cache/4933a3495917605d4104e91e9025e88f/DSC_5990_60_60_fitted.png"
            alt=""
          />
          <div className={s.info}>
            <h3 className={s.nameInfo}>Нижегородский Дом бракосочетания</h3>
            <a className={s.linkInfo} href="">
              nn-svadba.ru
            </a>
          </div>
        </div>
        <div className={s.item}>
          <img
            className={s.item_img}
            src="https://zags.government-nnov.ru/upload/resize_cache/181e1c2185ba0f01988df5960dec1cdf/g2_01_60_60_fitted.png"
            alt=""
          />
          <div className={s.info}>
            <h3 className={s.nameInfo}>Портал Госуслуг</h3>
            <a className={s.linkInfo} href="">
              www.gosuslugi.ru
            </a>
          </div>
        </div>
        <div className={s.item}>
          <img
            className={s.item_img}
            src="https://zags.government-nnov.ru/upload/resize_cache/af804096c15585b75925ea5644ef4cfe/Gerb-Nizhegorodskoy-oblasti_60_60_fitted.png"
            alt=""
          />
          <div className={s.info}>
            <h3 className={s.nameInfo}>Правительство Нижегородской области</h3>
            <a className={s.linkInfo} href="">
              government-nnov.ru
            </a>
          </div>
        </div>
        <div className={s.item}>
          <img
            className={s.item_img}
            src="https://zags.government-nnov.ru/upload/resize_cache/9d40f8a5b545825e5721dfe99c2efead/slujba_fin_upol_60_60_fitted.png"
            alt=""
          />
          <div className={s.info}>
            <h3 className={s.nameInfo}>Финансовый уполномоченный: быстро, бесплатно, справедливо</h3>
            <a className={s.linkInfo} href="">
              new.finombudsman.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
