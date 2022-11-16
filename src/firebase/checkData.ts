import getData, { setData } from "../redux/slices/getData";
import { setcheckStatementsUsers, setDataUsers } from "../redux/slices/superUser";
import { useAppDispatch } from "../redux/store";
import { addUserDoc } from "./addUserDoc";
import { auth } from "./config";
import { firestore } from "./config";
import { getDataDB } from "./getData";

export const checkData = async (uid: any, dispatch: any) => {
  const check = await firestore.collection("usersStatement").doc(uid);
  const docs = await check.get();
  if (docs.exists) {
    await getDataDB(uid, dispatch);
  } else {
    await addUserDoc(uid);
  }
  firestore
    .collection("usersStatement")
    // .where("status", "!=", "Удовлетворено")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const a = doc.data();
        const docName = doc.id;
        if (Object.keys(a.stat).length !== 0) {
          const check = a.stat;
          check.forEach((element: any) => {
            console.log(element.status);
            if (element.status === "Ожидается рассмотрение") {
              dispatch(setDataUsers({ docName, ...element }));
            }
            if (element.status === "В рассмотрении") {
              dispatch(setcheckStatementsUsers({ docName, ...element }));
            }
          });
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};
