import { ADD_VOTE } from "../constants/ActionsTypes";

export const AddVoteAction = (payload) => {
  return { type: ADD_VOTE, payload };
};
