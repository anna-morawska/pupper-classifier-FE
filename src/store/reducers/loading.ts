import { ILoadingAction, TLoading } from "../actions/loading";
import { ActionTypes } from "../types";

const loadingReducer = (state: TLoading = false, action: ILoadingAction) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return action.payload;

    default:
      return state;
  }
};

export { loadingReducer };
