import { combineReducers, createStore } from "redux";
import GetSearchTermReducer from "./reducers/GetSearchTermReducer";

const reducers = combineReducers({
  GetSearchTerm: GetSearchTermReducer,
});

const store = createStore(reducers);

export default store;
