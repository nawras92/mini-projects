import { ADD_VOTE } from "../constants/ActionsTypes.js";

const initialStateVotes = {
  votes: 0,
};

const AddVoteReducer = (state = initialStateVotes, action) => {
  if (action.type === ADD_VOTE) {
    state.votes = state.votes + 1;
    return state;
  }
  return state;
};

export default AddVoteReducer;
