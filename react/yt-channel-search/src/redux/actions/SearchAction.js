import { SEARCH } from "../constants/ActionTypes";

// search action
export const SearchAction = (payload) => {
  return { type: SEARCH, payload };
};
