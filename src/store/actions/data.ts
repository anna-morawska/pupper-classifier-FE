import { Dispatch } from "redux";
import { api } from "../../utils/utils";
import { ActionTypes } from "../types";
import { errorAction, IErrorAction } from "./error";
import { loadingAction, ILoadingAction } from "./loading";

const URL = "https://pupper-classifier.herokuapp.com/upload-image/";

export interface IFetchDataAction {
  type: ActionTypes.GET_DATA;
  payload: {
    categories: string[];
    data: number[];
  };
}

export interface IData {
  data: {
    labels: any;
    values: any;
  };
}

const transformResponse = (response: IData) => {
  const { labels, values } = response.data;

  const data = Object.keys(values)
    .map(key => {
      return +values[key].toFixed(2);
    })
    .slice(0, 5);

  const categories = Object.keys(labels)
    .map(key => {
      return labels[key]
        .split("_")
        .map(
          (element: string) =>
            element.charAt(0).toUpperCase() + element.slice(1)
        )
        .join(" ");
    })
    .slice(0, 5);

  return { categories, data };
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
