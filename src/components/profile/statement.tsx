import { deleteObject, getDownloadURL, listAll, ref } from "firebase/storage";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonGeneral } from "../../componentStyled/button";
import { changeStatementStatus } from "../../firebase/changeStatusStatement";
import { storage } from "../../firebase/config";

import { deleteData, getdata, viewData, viewSet } from "../../redux/slices/getData";
import { getStatusSite, getUid } from "../../redux/slices/slice";
import { changeDataUsers } from "../../redux/slices/superUser";
import { useAppDispatch } from "../../redux/store";

const Item = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
  background-color: hsl(207, 62%, 56%);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 380px) {
    min-height: 300px;
    padding-bottom: 30px;
  }
`;

const ItemCenter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 30px;
`;

const Info = styled.div`
  font-size: 20px;
  p > a {
    font-weight: 600;
    color: rgb(166, 32, 108);
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 380px) {
    margin-top: 10px;
  }
`;

const ModalBgc = styled.div`
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.54);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
`;

const ModalDeactiveStatement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  border-radius: 20px;
  background-color: hsl(217, 57%, 15%);
  h3 {
    text-align: center;
  }
`;

const ChangeStatusModal = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  width: 150px;

  border-radius: 15px;
  overflow: hidden;

  button:not(:last-child) {
    border-bottom: 1px solid black;
  }
  button:hover {
    background-color: hsl(207, 62%, 56%);
    color: white;
  }
`;

type stat = {
  number: number;
  date: string;
  id: number;
  status: string;
  type: string;
  user: boolean;
  docName: string;
  typeList: string;
  dateVisited: string;
  elem: any;
  pay: any;
};
export const StatementProfile = ({
  number,
  date,
  id,
  status,
  type,
  user,
  docName,
  typeList,
  dateVisited,
  elem,
  pay,
}: stat) => {
  const [classStat, setClassStat] = React.useState(false);
  const [changeStat, setChangeStat] = React.useState(false);
  const { uid } = useSelector(getUid);
  const [viewStat, setViewStat] = React.useState(false);

  const statusStatement = true;
  const dispatch = useAppDispatch();
  let { statusSite } = useSelector(getStatusSite);

  const deleteStatement = (id: number) => {
    dispatch(deleteData(id));
  };
  const [ImageCheck, setImageCheck] = React.useState("");
  const changeStatusStatement = (n: number) => {
    let status: string;
    n === 0
      ? (status = "Ожидается рассмотрение")
      : n === 1
      ? (status = "В рассмотрении")
      : n === 2
      ? (status = "Отказано")
      : (status = "Одобрено");
    console.log(typeList);
    dispatch(changeDataUsers({ id, status, typeList }));
    setChangeStat(false);
    changeStatementStatus(docName, statusSite, id, status);
  };

  React.useEffect(() => {
    dispatch(viewSet(viewStat));
    dispatch(viewData({ elem, type }));
  }, [viewStat]);
  const viewStatement = () => {
    setViewStat(!viewStat);
  };
  const displayImage = async (name: any) => {
    let idPerson = uid;
    if (statusSite) {
      idPerson = docName;
    }
    const listRef = ref(storage, `docs/${idPerson}/`);
    await listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          console.log(itemRef.name);
          if (itemRef.name === name) {
            console.log(itemRef.name, name);
            getDownloadURL(itemRef).then((getURL) => {
              console.log(getURL);

              setImageCheck(getURL);
            });
          }
        });
      })
      .catch((error) => {});
  };
  const deleteFile = async () => {
    deleteStatement(id);
    console.log(elem.spec.name);
    const deleteRef = ref(storage, `docs/${uid}/${elem.spec.name}`);
    await deleteObject(deleteRef)
      .then(() => {
        console.log("удалено");
      })
      .catch((error) => {
        console.log("ошибка");
      });
  };
  React.useEffect(() => {
    console.log(elem.spec.name);
    elem.spec.name && displayImage(elem.spec.name);
  }, []);

  const payButton = () => {};
  return (
    <Item>
      <ItemCenter>Заявка № {number}</ItemCenter>
      <Info>
        <p>Дата подачи: {date}</p>
        <p>Статус рассмотрения: {status}</p>
        <p>Заявка типа: {type}</p>
        <p>Дата посещения: {dateVisited}</p>
        {status === "Одобрено" && <p>Статус оплаты: {pay ? "Оплачено" : "Не оплачено"}</p>}
        {elem.spec.name && (
          <p>
            Файл:
            <a href={ImageCheck} target="_blank">
              Открыть
            </a>
          </p>
        )}
      </Info>
      <Buttons>
        <ButtonGeneral cart bgc="hsl(210,76%,40%)" width="150px" onClick={() => viewStatement()}>
          Посмотреть заявку
        </ButtonGeneral>
        {!user && status !== "В рассмотрении" && status !== "Одобрено" && status !== "Отказано" ? (
          <ButtonGeneral cart bgc="hsl(210,76%,40%)" width="150px" onClick={() => setClassStat(true)}>
            Отменить заявку
          </ButtonGeneral>
        ) : status === "Одобрено" && !user && !pay ? (
          <Link to={`pay/${id}`}>
            <ButtonGeneral cart bgc="hsl(210,76%,40%)" width="150px" onClick={payButton}>
              Оплата
            </ButtonGeneral>
          </Link>
        ) : (
          <div></div>
        )}
        {user && status !== "Одобрено" && (
          <ButtonGeneral cart bgc="hsl(210,76%,40%)" width="150px" onClick={() => setChangeStat(!changeStat)}>
            Статус
          </ButtonGeneral>
        )}
        {changeStat && (
          <ChangeStatusModal>
            <ButtonGeneral
              size="15px"
              width="100%"
              border="none"
              radius="none"
              bgc="hsl(210,76%,40%)"
              padding="5px 0px"
              height="auto"
              onClick={() => changeStatusStatement(0)}
            >
              Ожидается рассмотрение
            </ButtonGeneral>
            <ButtonGeneral
              size="15px"
              width="100%"
              border="none"
              radius="none"
              bgc="hsl(210,76%,40%)"
              padding="5px 0px"
              height="auto"
              onClick={() => changeStatusStatement(1)}
            >
              В рассмотрении
            </ButtonGeneral>
            <ButtonGeneral
              size="15px"
              width="100%"
              border="none"
              radius="none"
              bgc="hsl(210,76%,40%)"
              padding="5px 0px"
              height="auto"
              onClick={() => changeStatusStatement(2)}
            >
              Отказано
            </ButtonGeneral>
            <ButtonGeneral
              size="15px"
              width="100%"
              border="none"
              radius="none"
              bgc="hsl(210,76%,40%)"
              padding="5px 0px"
              height="auto"
              onClick={() => changeStatusStatement(3)}
            >
              Одобрено
            </ButtonGeneral>
          </ChangeStatusModal>
        )}
      </Buttons>
      {classStat && statusStatement && (
        <ModalBgc onClick={() => setClassStat(false)}>
          <ModalDeactiveStatement>
            <h3>Вы действительно хотите удалить заявление?</h3>
            <ItemCenter>
              <ButtonGeneral width="150px" margin="0px 20px 0px 0px" onClick={() => deleteFile()}>
                Удалить
              </ButtonGeneral>
              <ButtonGeneral width="150px" onClick={() => setClassStat(false)}>
                Отмена
              </ButtonGeneral>
            </ItemCenter>
          </ModalDeactiveStatement>
        </ModalBgc>
      )}
    </Item>
  );
};
