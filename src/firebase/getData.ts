import { setData } from "../redux/slices/getData";
import { setStatusSite } from "../redux/slices/slice";
import { useAppDispatch } from "../redux/store";
import { auth } from "./config";
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
        dispatch(setStatusSite(a?.status));
        console.log(uid);
        console.log(a?.status);
        if (Object.keys(b).length !== 0) {
          b.forEach((elem: any) => {
            dispatch(setData(elem));
          });
        }
      }
    });
};
