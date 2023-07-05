import { addData, setData } from "../store/slices/getData";
import { setStatusSite } from "../store/slices/slice";

import { firestore } from "./config";
export const getDataDB = async (uid: string, dispatch: any) => {
  firestore
    .collection("usersStatement")
    .doc(uid)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot) {
        const a = querySnapshot.data();
        const b = a?.stat;

        console.log(uid);
        dispatch(setStatusSite(a?.status)); //диспатчим стутс доступа
        if (Object.keys(b).length !== 0) {
          dispatch(addData(b));
        }
      }
    });
};
