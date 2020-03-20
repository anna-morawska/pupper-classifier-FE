import { IFetchDataAction } from "../actions/data";
import { ActionTypes } from "../types";

export type TDataState = {
  categories: string[];
  data: number[];
};

const dataReducer = (
  state: TDataState = { categories: [], data: [] },
  action: IFetchDataAction
) => {
  switch (action.type) {
    case ActionTypes.GET_DATA:
      return action.payload;

    default:
      return state;
  }
};

export { dataReducer };
