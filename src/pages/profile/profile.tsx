import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader/loader";
import { StatementProfile } from "../../components/profile/statement";
import { SuperUser } from "../../components/profile/superUser";
import { User } from "../../components/profile/user";
import { auth } from "../../firebase/config";
import { clearData, getdata } from "../../redux/slices/getData";
import { clearEmailUser, clearId, clearStatusSite } from "../../redux/slices/slice";
import { getStatusSite } from "../../redux/slices/slice";
import { clearDataUsers } from "../../redux/slices/superUser";
import { useAppDispatch } from "../../redux/store";
import { View } from "../viewStatement/view";
import s from "./profile.module.css";

export const Profile = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  let { statusSite } = useSelector(getStatusSite);
  let { viewData, view } = useSelector(getdata);
  const { data } = useSelector(getdata);
  const logout = () => {
    signOut(auth);
    dispatch(clearData());
    dispatch(clearId());
    dispatch(clearStatusSite());
    dispatch(clearDataUsers());
    dispatch(clearEmailUser());
    return navigation("/kursProj/authorization");
  };

  return (
    <div className={s.root}>
      {statusSite !== "" ? (
        <>
          <div>
            <div className={s.pageInfo}>
              <h2>Личный кабинет</h2>
            </div>
            {statusSite ? <SuperUser /> : <User data={data} />}
            {view && <View type={viewData.type} statement={viewData.elem} />}
          </div>
          <div className={s.buttons}>
            {!statusSite && <button>Редактировать личные данные</button>}
            <button onClick={() => logout()}>Выйти из профиля</button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
