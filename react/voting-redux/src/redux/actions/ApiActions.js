import { FETCH_USERS } from "../constants/ActionsTypes.js";

export const FetchUsersAction = (payload) => {
  return { type: FETCH_USERS, payload };
};
