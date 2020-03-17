import { ActionTypes } from "../types";

export type TLoading = boolean;

export interface ILoadingAction {
  type: ActionTypes.LOADING;
  payload: TLoading;
}

export const loadingAction = (loading: boolean): ILoadingAction => ({
  type: ActionTypes.LOADING,
  payload: loading
});
