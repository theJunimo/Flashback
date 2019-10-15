import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as API from '../lib/api';

const SHOW_COPY_MODAL = 'SHOW_COPY_MODAL';
const CLOSE_COPY_MODAL = 'CLOSE_COPY_MODAL';

const [
  INCREASE_COPY_CNT_ASYNC,
  INCREASE_COPY_CNT_ASYNC_SUCCESS,
  INCREASE_COPY_CNT_ASYNC_ERROR
] = createRequestActionTypes('INCREASE_COPY_CNT_ASYNC');

export const showCopyModal = createAction(SHOW_COPY_MODAL);
export const closeCopyModal = createAction(CLOSE_COPY_MODAL);

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
  copyModalVisible: false,
  msg: '',
  error: false
};

const copy = handleActions(
  {
    [SHOW_COPY_MODAL]: (state, action) => ({
      ...state,
      copyModalVisible: true,
      msg: action.payload
    }),
    [CLOSE_COPY_MODAL]: (state, action) => ({
      ...state,
      copyModalVisible: false,
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
