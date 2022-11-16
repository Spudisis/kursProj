import { useSelector } from "react-redux";
import { getStatusSite } from "../redux/slices/slice";
import { addStatement } from "./addStatement";
import { auth } from "./config";
import { firestore } from "./config";
export const changeStatementStatus = async (uid: any, statusSite: boolean, id: number, status: string) => {
  const ref = firestore.collection("usersStatement").doc(uid);

  const mas: any[] = [];
  if (statusSite) {
    await ref.get().then(function (querySnapshot) {
      if (querySnapshot) {
        const a = querySnapshot.data();
        const b = a?.stat;
        console.log(a?.stat);
        if (Object.keys(b).length !== 0) {
          b.forEach((elem: any) => {
            if (elem.id === id) {
              elem.status = status;
            }
            mas.push(elem);
            console.log(mas);
          });
        }
      }
    });
    addStatement(uid, mas, statusSite);
  }
};
