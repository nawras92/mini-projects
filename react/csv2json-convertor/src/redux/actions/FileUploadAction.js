import { FILE_UPLOAD } from "../constants/ActionTypes";
export const FileUploadAction = (payload) => {
  return { type: FILE_UPLOAD, payload };
};
