import { Dispatch } from "redux";
import { api } from "../../utils/utils";
import { ActionTypes } from "../types";
import { errorAction, IErrorAction } from "./error";
import { loadingAction, ILoadingAction } from "./loading";
import { PieDatum } from "@nivo/pie";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

export interface IFetchDataAction {
  type: ActionTypes.GET_DATA;
  payload: PieDatum[];
}

export interface IData {
  label: string;
  id: string;
  value: number;
}

export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    dispatch<ILoadingAction>(loadingAction(true));

    const response = await api<IData>(URL);

    const data = [
      {
        id: "Papillon",
        label: "Papillon",
        value: 135
      },
      {
        id: "hack",
        label: "hack",
        value: 568
      },
      {
        id: "scala",
        label: "scala",
        value: 197
      },
      {
        id: "rust",
        label: "rust",
        value: 291
      },
      {
        id: "erlang",
        label: "erlang",
        value: 168
      }
    ];

    dispatch<IFetchDataAction>({
      type: ActionTypes.GET_DATA,
      payload: data
    });

    dispatch<ILoadingAction>(loadingAction(false));
  } catch (err) {
    dispatch<IErrorAction>(errorAction(true));
  }
};
