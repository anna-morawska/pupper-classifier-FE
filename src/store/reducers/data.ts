import { IData, IFetchDataAction } from "../actions/data";
import { ActionTypes } from "../types";

export type TDataState = IData[];

const dataReducer = (state: TDataState = [], action: IFetchDataAction) => {
  switch (action.type) {
    case ActionTypes.GET_DATA:
      return action.payload;

    default:
      return state;
  }
};

export { dataReducer };
