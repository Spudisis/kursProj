import { auth } from "./config";
import { firestore } from "./config";
export const addUserDoc = (uid: any) => {
  firestore.collection("usersStatement").doc(uid).set({ status: false, stat: {} });
  
};
