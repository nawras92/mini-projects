import { FILE_UPLOADED } from "../constants/ActionTypes";

const initial = {
  filename: "",
  content: "",
};

const FileUploadedReducer = (state = initial, action) => {
  switch (action.type) {
    case FILE_UPLOADED:
      return {
        ...state,
        filename: action.payload.filename,
        content: action.payload.content,
      };
    default:
      return state;
  }
};

export default FileUploadedReducer;
