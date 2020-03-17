import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import { errorReducer } from "./error";
import { dataReducer, TDataState } from "./data";

export interface IStore {
  loading: boolean;
  error: boolean;
  data: TDataState;
}

const rootReducer = combineReducers<IStore>({
  loading: loadingReducer,
  error: errorReducer,
  data: dataReducer
});

export { rootReducer };
