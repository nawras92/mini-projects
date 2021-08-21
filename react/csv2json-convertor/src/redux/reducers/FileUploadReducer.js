import { FILE_UPLOAD } from "../constants/ActionTypes";

const initial = {
  filename: "",
  content: "",
  jsonContent: "",
  delimiter: ";",
};
const FileUploadReducer = (state = initial, action) => {
  switch (action.type) {
    case FILE_UPLOAD:
      state.filename = action.payload.filename;
      state.content = action.payload.content;
      state.delimiter = action.payload.delimiter;
      state.jsonContent = action.payload.jsonContent;
      return state;
    default:
      return state;
  }
};

export default FileUploadReducer;
