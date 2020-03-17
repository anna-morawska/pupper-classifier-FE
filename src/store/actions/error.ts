import { ActionTypes } from "../types";

export type TError = boolean;

export interface IErrorAction {
  type: ActionTypes.ERROR;
  payload: TError;
}

export const errorAction = (error: boolean): IErrorAction => ({
  type: ActionTypes.ERROR,
  payload: error
});
