import { combineReducers, createStore } from "redux";
import GetValueReducer from "./reducers/GetValueReducer";

const reducers = combineReducers({
  getValue: GetValueReducer,
});

const store = createStore(reducers);

export default store;
