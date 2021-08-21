import { combineReducers, createStore } from "redux";
import FileUploadReducer from "./reducers/FileUploadReducer";

const reducers = combineReducers({
  getFileInfo: FileUploadReducer,
});

const store = createStore(reducers);
export default store;
