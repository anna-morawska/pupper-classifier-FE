import { IErrorAction, TError } from "../actions/error";
import { ActionTypes } from "../types";

const errorReducer = (state: TError = false, action: IErrorAction) => {
  switch (action.type) {
    case ActionTypes.ERROR:
      return action.payload;

    default:
      return state;
  }
};

export { errorReducer };
