import { PROVIDE_VALUE } from "../constants/ActionTypes";

const initial = {
  value: "To be updated....",
};

const GetValueReducer = (state = initial, action) => {
  if (action.type === PROVIDE_VALUE) {
    state.value = action.payload.updatedValue;
  }
  return state;
};

export default GetValueReducer;
