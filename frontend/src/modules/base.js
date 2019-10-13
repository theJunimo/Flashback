import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as API from '../lib/api';


const [
  GET_EMOTICONS_ASYNC,
  GET_EMOTICONS_ASYNC_SUCCESS,
  GET_EMOTICONS_ASYNC_ERROR
] = createRequestActionTypes('GET_EMOTICONS_ASYNC');

const [
  GET_EMOTICONS_BY_TAG_ASYNC,
  GET_EMOTICONS_BY_TAG_ASYNC_SUCCESS,
  GET_EMOTICONS_BY_TAG_ASYNC_ERROR
] = createRequestActionTypes('GET_EMOTICONS_BY_TAG_ASYNC');

export const getAllEmoticons = createAction(GET_EMOTICONS_ASYNC);
export const getEmoticonsByTag = createAction(
  GET_EMOTICONS_BY_TAG_ASYNC,
  tagName => tagName
);

const getAllEmoticonsSaga = createRequestSaga(
  GET_EMOTICONS_ASYNC,
  API.getAllEmoticons
);
const getEmoticonsByTagSaga = createRequestSaga(
  GET_EMOTICONS_BY_TAG_ASYNC,
  API.getEmoticonsByTag
);

export function* baseSaga() {
  yield takeLatest(GET_EMOTICONS_ASYNC, getAllEmoticonsSaga);
  yield takeLatest(GET_EMOTICONS_BY_TAG_ASYNC, getEmoticonsByTagSaga);
}

const initialState = {
  error: null,
  list: [
    {
      id: '',
      emoticon: '',
      tag: []
    }
  ]
};

const base = handleActions(
  {
    [GET_EMOTICONS_ASYNC_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload.list
    }),
    [GET_EMOTICONS_ASYNC_ERROR]: (state, { payload }) => ({
      list: [],
      error: payload
    }),
    [GET_EMOTICONS_BY_TAG_ASYNC_SUCCESS]: (state, action) => ({
      ...state,
      list: action.payload.list
    }),
    [GET_EMOTICONS_BY_TAG_ASYNC_ERROR]: (state, { payload }) => ({
      list: [],
      error: payload
    })
  },
  initialState
);

export default base;
