import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import base, { baseSaga } from "./base";
import copy, { copySaga } from './copy';

const rootReducer = combineReducers({
  loading,
  base,
  copy
});

export function* rootSaga() {
  yield all([baseSaga(), copySaga()]);
}

export default rootReducer;
