import getUsers from "../../api/userApi";
import { FETCH_USERS } from "../constants/ActionsTypes.js";

const initialStateUsers = {
  users: [],
};

const FetchUsersReducer = (state = initialStateUsers, action) => {
  if (action.type === FETCH_USERS) {
    const returnUsers = async () => {
      const data = await getUsers();
      state.users = data;
      return state;
    };
    returnUsers();
  }
  return state;
};

export default FetchUsersReducer;
