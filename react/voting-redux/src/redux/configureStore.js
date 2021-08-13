import { combineReducers, createStore } from "redux";
import FetchUsersReducer from "./reducers/FetchUsersReducer";
import AddVoteReducer from "./reducers/CounterReducer";

const reducers = combineReducers({
  FetchUsers: FetchUsersReducer,
  AddVote: AddVoteReducer,
});

const store = createStore(reducers);

export default store;
