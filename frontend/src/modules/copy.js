import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as API from '../lib/api';

const SHOW_MODAL = 'SHOW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const [
  INCREASE_COPY_CNT_ASYNC,
  INCREASE_COPY_CNT_ASYNC_SUCCESS,
  INCREASE_COPY_CNT_ASYNC_ERROR
] = createRequestActionTypes('INCREASE_COPY_CNT_ASYNC');

export const showModal = createAction(SHOW_MODAL);
export const closeModal = createAction(CLOSE_MODAL);

export const increaseCopyCnt = createAction(
  INCREASE_COPY_CNT_ASYNC,
  emtiId => emtiId
);

const increaseCopyCntSaga = createRequestSaga(
  INCREASE_COPY_CNT_ASYNC,
  API.increaseCopyCnt
);

export function* copySaga() {
  yield takeLatest(INCREASE_COPY_CNT_ASYNC, increaseCopyCntSaga);
}

const initialState = {
  modal: false,
  msg: '',
  error: false
};

const copy = handleActions(
  {
    [SHOW_MODAL]: (state, action) => ({
      ...state,
      modal: true,
      msg: action.payload
    }),
    [CLOSE_MODAL]: (state, action) => ({
      ...state,
      modal: false,
      msg: ''
    }),
    [INCREASE_COPY_CNT_ASYNC_SUCCESS]: (state, action) => ({
      ...state,
      error: false
    }),
    [INCREASE_COPY_CNT_ASYNC_ERROR]: (state, action) => ({
      ...state,
      error: action.payload.error
    })
  },
  initialState
);

export default copy;
