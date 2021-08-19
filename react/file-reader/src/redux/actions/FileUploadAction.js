import { FILE_UPLOADED } from "../constants/ActionTypes";

export const FileUploadAction = (payload) => {
  return { type: FILE_UPLOADED, payload };
};
