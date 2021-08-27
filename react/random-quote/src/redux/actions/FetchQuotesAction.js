import { FETCH_QUOTES } from "../constants/ActionTypes";
const FetchQuotesAction = (payload) => {
  return { type: FETCH_QUOTES, payload };
};

export default FetchQuotesAction;
