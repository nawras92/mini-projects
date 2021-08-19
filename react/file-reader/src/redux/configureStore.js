import { combineReducers, createStore } from "redux";
import FileUploadedReducer from "./reducers/FileUploadedReducer";

const reducers = combineReducers({
  getFileInfo: FileUploadedReducer,
});

const store = createStore(reducers);

export default store;
