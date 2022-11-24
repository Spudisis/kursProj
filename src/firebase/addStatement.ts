import { useSelector } from "react-redux";
import { getStatusSite } from "../redux/slices/slice";
import { auth } from "./config";
import { firestore } from "./config";
export const addStatement = async (uid: any, statement: any, status: boolean) => {
  const ref = firestore.collection("usersStatement").doc(uid);
  if (ref) {
    await ref
      .update({ stat: statement })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }
};
