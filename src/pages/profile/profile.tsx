import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const [loginRootStatus, setLoginRootStatus] = React.useState({});

  const logout = () => {
    signOut(auth);
    dispatch(clearData());
    dispatch(clearId());
    dispatch(clearStatusSite());
    dispatch(clearDataUsers());
    dispatch(clearEmailUser());
    return navigation("/");
  };

  React.useEffect(() => {
    setLoginRootStatus(statusSite);
  }, [statusSite]);
  return (
    <div className={s.root}>
      <div className={s.pageInfo}>
        <h2>Личный кабинет</h2>
      </div>
      {loginRootStatus ? <SuperUser /> : <User />}
      {view && <View type={viewData.type} statement={viewData.elem} />}
      <div className={s.buttons}>
        {!loginRootStatus && <button>Редактировать личные данные</button>}
        <button onClick={() => logout()}>Выйти из профиля</button>
      </div>
    </div>
  );
};
