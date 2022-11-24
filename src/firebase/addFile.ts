import React from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import { storage } from "./config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const UploadImg = async ({ fileUpload, uid }: any) => {
  console.log(fileUpload);
  const { name } = fileUpload;
  console.log(name);
  if (fileUpload) {
    const imageRef = ref(storage, `docs/${uid}/${name}`);
    await uploadBytes(imageRef, fileUpload).then((snaphsot) => {});
    console.log("это бля сначала");
  }
};
