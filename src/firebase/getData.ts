import { addData, setData } from "../redux/slices/getData";
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

        console.log(uid);
        dispatch(setStatusSite(a?.status)); //диспатчим стутс доступа
        if (Object.keys(b).length !== 0) {
          dispatch(addData(b));
        }
      }
    });
};
