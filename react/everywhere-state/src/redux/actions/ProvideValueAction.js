import { PROVIDE_VALUE } from "../constants/ActionTypes";
const ProvideValueAction = (payload) => {
  return { type: PROVIDE_VALUE, payload };
};

export { ProvideValueAction };
