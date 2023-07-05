import { storage } from "./config";
import { ref, uploadBytes } from "firebase/storage";

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
    await uploadBytes(imageRef, fileUpload).then(() => {});
    status(numberForm);
    info({ name, ...values });
  } else {
    setDownloadFileCheck("none");
    setErrorFile("block");
  }
};
