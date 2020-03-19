import { Dispatch } from "redux";
import { api } from "../../utils/utils";
import { ActionTypes } from "../types";
import { errorAction, IErrorAction } from "./error";
import { loadingAction, ILoadingAction } from "./loading";
import { PieDatum } from "@nivo/pie";

const URL = "https://pupper-classifier.herokuapp.com/upload-image/";

export interface IFetchDataAction {
  type: ActionTypes.GET_DATA;
  payload: PieDatum[];
}

export interface IData {
  data: {
    labels: any;
    values: any;
  };
}

const transformResponse = (response: IData) => {
  const { labels, values } = response.data;

  const data = Object.keys(labels).map(key => {
    const label = labels[key]
      .split("_")
      .map(
        (element: string) => element.charAt(0).toUpperCase() + element.slice(1)
      )
      .join(" ");

    const value = +values[key].toFixed(2);

    return { id: label, label, value };
  });

  return data;
};

export const fetchData = (file: any) => async (dispatch: Dispatch) => {
  try {
    dispatch<ILoadingAction>(loadingAction(true));

    const response = await api<IData>(URL, file);
    const data = transformResponse(response);

    dispatch<IFetchDataAction>({
      type: ActionTypes.GET_DATA,
      payload: data
    });

    dispatch<ILoadingAction>(loadingAction(false));
  } catch (err) {
    dispatch<IErrorAction>(errorAction(true));
  }
};
