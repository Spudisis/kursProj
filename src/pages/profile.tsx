import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../components/loader/loader";
import { SuperUser } from "../components/profile/superUser";
import { User } from "../components/profile/user";
import { ButtonGeneral } from "../componentStyled/button";
import { Window } from "../componentStyled/window";
import { auth } from "../firebase/config";
import { clearData, getdata } from "../redux/slices/getData";
import { clearEmailUser, clearId, clearStatusSite } from "../redux/slices/slice";
import { getStatusSite } from "../redux/slices/slice";
import { clearDataUsers } from "../redux/slices/superUser";
import { useAppDispatch } from "../redux/store";
import { View } from "./view";

const PageInfo = styled.div`
  padding: 20px 0px;
  font-size: 30px;

  h2 {
    margin: 0px;
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const Profile = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  let { statusSite } = useSelector(getStatusSite);
  let { viewData, view } = useSelector(getdata);
  const { data } = useSelector(getdata);
  const logout = async () => {
    await signOut(auth);
    dispatch(clearData());
    dispatch(clearId());
    dispatch(clearStatusSite());
    dispatch(clearDataUsers());
    dispatch(clearEmailUser());
    return navigation("/kursProj/authorization");
  };

  return (
    <Window height="90vh" direction="column">
      {statusSite !== "" ? (
        <>
          <div>
            <PageInfo>
              <h2>Личный кабинет</h2>
            </PageInfo>
            {statusSite ? <SuperUser /> : <User data={data} />}
            {view && <View type={viewData.type} statement={viewData.elem} />}
          </div>
          <Buttons>
            {!statusSite && (
              <ButtonGeneral width="200px" onClick={() => navigation("/kursProj/profile/changeInfo")}>
                Редактировать личные данные
              </ButtonGeneral>
            )}
            <ButtonGeneral width="200px" onClick={() => logout()}>
              Выйти из профиля
            </ButtonGeneral>
          </Buttons>
        </>
      ) : (
        <Loader />
      )}
    </Window>
  );
};
