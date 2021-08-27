import { combineReducers, createStore } from "redux";
import FetchQuotesReducer from "./reducers/FetchQuotesReducer";

const reducers = combineReducers({
  FetchQuotes: FetchQuotesReducer,
});

const store = createStore(reducers);

export default store;
