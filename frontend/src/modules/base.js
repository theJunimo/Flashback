import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as API from '../lib/api';

const SHOW_ADD_MODAL = 'SHOW_ADD_MODAL';
const CLOSE_ADD_MODAL = 'CLOSE_ADD_MODAL';

const [
  GET_EMOTICONS_ASYNC,
  GET_EMOTICONS_ASYNC_SUCCESS,
  GET_EMOTICONS_ASYNC_ERROR
] = createRequestActionTypes('GET_EMOTICONS_ASYNC');

const [
  POST_NEW_EMOTICON_ASYNC,
  POST_NEW_EMOTICON_ASYNC_SUCCESS,
  POST_NEW_EMOTICON_ASYNC_ERROR
] = createRequestActionTypes('POST_NEW_EMOTICON_ASYNC');

const [
  GET_EMOTICONS_BY_TAG_ASYNC,
  GET_EMOTICONS_BY_TAG_ASYNC_SUCCESS,
  GET_EMOTICONS_BY_TAG_ASYNC_ERROR
] = createRequestActionTypes('GET_EMOTICONS_BY_TAG_ASYNC');

export const showAddModal = createAction(SHOW_ADD_MODAL);
export const closeAddModal = createAction(CLOSE_ADD_MODAL);

export const getAllEmoticons = createAction(GET_EMOTICONS_ASYNC);
export const postNewEmoticon = createAction(
  POST_NEW_EMOTICON_ASYNC,
  data => data
);
export const getEmoticonsByTag = createAction(
  GET_EMOTICONS_BY_TAG_ASYNC,
  tagName => tagName
);

const getAllEmoticonsSaga = createRequestSaga(
  GET_EMOTICONS_ASYNC,
  API.getAllEmoticons
);
const postNewEmoticonSaga = createRequestSaga(
  POST_NEW_EMOTICON_ASYNC,
  API.postNewEmoticon
);
const getEmoticonsByTagSaga = createRequestSaga(
  GET_EMOTICONS_BY_TAG_ASYNC,
  API.getEmoticonsByTag
);

export function* baseSaga() {
  yield takeLatest(GET_EMOTICONS_ASYNC, getAllEmoticonsSaga);
  yield takeLatest(POST_NEW_EMOTICON_ASYNC, postNewEmoticonSaga);
  yield takeLatest(GET_EMOTICONS_BY_TAG_ASYNC, getEmoticonsByTagSaga);
}

const initialState = {
  status: 'main',
  addModalVisible: false,
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
    [SHOW_ADD_MODAL]: (state, action) => ({
      ...state,
      addModalVisible: true,
    }),
    [CLOSE_ADD_MODAL]: (state, action) => ({
      ...state,
      addModalVisible: false,
    }),
    [GET_EMOTICONS_ASYNC_SUCCESS]: (state, action) => ({
      ...state,
      status: 'main',
      list: action.payload.list
    }),
    [GET_EMOTICONS_ASYNC_ERROR]: (state, { payload }) => ({
      list: [],
      status: 'main',
      error: payload
    }),
    [POST_NEW_EMOTICON_ASYNC_SUCCESS]: (state, action) => ({
      ...state,
      status: action.payload.status,
      list: action.payload.list
    }),
    [POST_NEW_EMOTICON_ASYNC_ERROR]: (state, { payload }) => ({
      status: 'newEmoticon',
      list: [],
      error: payload
    }),
    [GET_EMOTICONS_BY_TAG_ASYNC_SUCCESS]: (state, action) => ({
      ...state,
      status: 'search',
      list: action.payload.list
    }),
    [GET_EMOTICONS_BY_TAG_ASYNC_ERROR]: (state, { payload }) => ({
      status: 'search',
      list: [],
      error: payload
    })
  },
  initialState
);

export default base;
