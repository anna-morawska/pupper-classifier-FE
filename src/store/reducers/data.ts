import { IFetchDataAction } from "../actions/data";
import { ActionTypes } from "../types";
import { PieDatum } from "@nivo/pie";

export type TDataState = PieDatum[];

const dataReducer = (state: TDataState = [], action: IFetchDataAction) => {
  switch (action.type) {
    case ActionTypes.GET_DATA:
      return action.payload;

    default:
      return state;
  }
};

export { dataReducer };
