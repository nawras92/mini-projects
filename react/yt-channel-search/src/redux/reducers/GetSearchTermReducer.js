import { SEARCH } from "../constants/ActionTypes";

const initial = {
  term: "",
};
const GetSearchTermReducer = (state = initial, action) => {
  switch (action.type) {
    case SEARCH:
      state.term = action.payload.term;
      return state;
    default:
      return state;
  }
};

export default GetSearchTermReducer;
