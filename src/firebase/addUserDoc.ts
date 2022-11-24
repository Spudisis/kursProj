import { setStatusSite } from "../redux/slices/slice";
import { auth } from "./config";
import { firestore } from "./config";
export const addUserDoc = (uid: string, dispatch: any) => {
  firestore.collection("usersStatement").doc(uid).set({ status: false, stat: {} });
  dispatch(setStatusSite(false)); //диспатчим статус доступа
};
