import { FETCH_QUOTES } from "../constants/ActionTypes";

const initial = {
  quotes: [],
};

const FetchQuotesReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      state.quotes = action.payload.quotes;
      return state;
    default:
      return state;
  }
};

export default FetchQuotesReducer;
