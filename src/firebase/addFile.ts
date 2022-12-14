import React from "react";
import { useUploadFile } from "react-firebase-hooks/storage";
import { storage } from "./config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const UploadImg = async ({
  fileUpload,
  uid,
  status,
  numberForm,
  info,
  values,
  setErrorFile,
  setDownloadFileCheck,
}: any) => {
  console.log(fileUpload);
  const { name } = fileUpload;

  let checkType = /\.[0-9a-z]{1,5}$/.exec(name);

  if (checkType![0] === ".pdf" && fileUpload) {
    setErrorFile("none");
    setDownloadFileCheck("block");
    const imageRef = ref(storage, `docs/${uid}/${name}`);
    await uploadBytes(imageRef, fileUpload).then((snaphsot) => {});
    status(numberForm);
    console.log("сработал стейт загрузки");
    info({ name, ...values });
    console.log("Файл загрузился");
  } else {
    setDownloadFileCheck("none");
    setErrorFile("block");
  }
};
