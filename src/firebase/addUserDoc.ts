import { setStatusSite } from "../store/slices/slice";
import { firestore } from "./config";
export const addUserDoc = (uid: string, dispatch: any) => {
  firestore.collection("usersStatement").doc(uid).set({ status: false, stat: {} });
  dispatch(setStatusSite(false)); //диспатчим статус доступа
};
