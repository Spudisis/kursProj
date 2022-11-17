import React from "react";
import s from "./view.module.css";
export const DeathView = ({ statement }: any) => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <p>Дата посещения:</p>
        <p>{statement.dateVisited.dateVisited}</p>
      </div>
      <div className={s.twinBlock}>
        <div className={s.twin}>
          <div className={s.block}>
            <b>Умерший</b>
          </div>
        </div>
        <div className={s.twin}>
          <div className={s.block}>
            <b>Заявитель</b>
          </div>
        </div>
      </div>
      <div className={s.twinBlock}>
        <div className={s.twin}>
          <div className={s.block}>
            <p>Имя:&nbsp;</p>
            <p>{statement.general.fioM ? statement.general.fioM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>День рождения:&nbsp;</p>
            <p>{statement.general.birthdayM ? statement.general.birthdayM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Место рождения:&nbsp;</p>
            <p>{statement.general.birthdayPlaceM ? statement.general.birthdayPlaceM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Национальность:&nbsp;</p>
            <p>{statement.general.nationalM ? statement.general.nationalM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Гражданство:&nbsp;</p>
            <p>{statement.general.nationalityM ? statement.general.nationalityM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Место жительства:&nbsp;</p>
            <p>{statement.general.placeLiveM ? statement.general.placeLiveM : "Не указано"}</p>
          </div>
        </div>
        <div className={s.twin}>
          <div>
            <div className={s.block}>
              <p>Имя:&nbsp;</p>
              <p>{statement.general.fioW ? statement.general.fioW : "Не указано"}</p>
            </div>
            <div className={s.block}>
              <p>День рождения:&nbsp;</p>
              <p>{statement.general.birthdayW ? statement.general.birthdayW : "Не указано"}</p>
            </div>
            <div className={s.block}>
              <p>Место рождения:&nbsp;</p>
              <p>{statement.general.birthdayPlaceW ? statement.general.birthdayPlaceW : "Не указано"}</p>
            </div>
            <div className={s.block}>
              <p>Национальность:&nbsp;</p>
              <p>{statement.general.nationalW ? statement.general.nationalW : "Не указано"}</p>
            </div>
            <div className={s.block}>
              <p>Гражданство:&nbsp;</p>
              <p>{statement.general.nationalityW ? statement.general.nationalityW : "Не указано"}</p>
            </div>
            <div className={s.block}>
              <p>Место жительства:&nbsp;</p>
              <p>{statement.general.placeLiveW ? statement.general.placeLiveW : "Не указано"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.twinBlock}>
        <div className={s.twin}>
          <div className={s.block}>
            <p>Название документа:</p>
            <p>{statement.passport.nameDocM ? statement.passport.nameDocM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Дата выдачи документа:</p>
            <p>{statement.passport.datePasM ? statement.passport.datePasM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Номер:</p>
            <p>{statement.passport.numPasM ? statement.passport.numPasM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Серия:</p>
            <p>{statement.passport.serPasM ? statement.passport.serPasM : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Кем выдан:</p>
            <p>{statement.passport.orgPasM ? statement.passport.orgPasM : "Не указано"}</p>
          </div>
        </div>
        <div className={s.twin}>
          <div className={s.block}>
            <p>Название документа:</p>
            <p>{statement.passport.nameDocW ? statement.passport.nameDocW : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Дата выдачи документа:</p>
            <p>{statement.passport.datePasW ? statement.passport.datePasW : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Номер:</p>
            <p>{statement.passport.numPasW ? statement.passport.numPasW : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Серия:</p>
            <p>{statement.passport.serPasW ? statement.passport.serPasW : "Не указано"}</p>
          </div>
          <div className={s.block}>
            <p>Кем выдан:</p>
            <p>{statement.passport.orgPasW ? statement.passport.orgPasW : "Не указано"}</p>
          </div>
        </div>
      </div>
      <div className={s.block}>
        <p>Дата смерти:&nbsp;</p>
        <p>{statement.spec.date}</p>
      </div>
    </div>
  );
};
