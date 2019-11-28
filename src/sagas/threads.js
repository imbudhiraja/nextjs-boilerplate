import { all, delay, select, call, put, takeLatest } from 'redux-saga/effects';
import { CREATE_THREAD,
  createThreadFailure,
  createThreadRequested,
  FETCH_THREADS,
  fetchThreadsFailure,
  fetchThreadsRequested,
  fetchThreadsSuccess,
  FETCH_MESSAGES,
  fetchMessages,
  fetchMessagesFailure,
  fetchMessagesRequested,
  fetchMessagesSuccess,
  FETCH_THREAD_DETAIL,
  fetchThreadDetail,
  fetchThreadDetailFailure,
  fetchThreadDetailRequested,
  fetchThreadDetailSuccess,
  SEND_MESSAGE,
  sendMessageFailure,
  sendMessageRequested,
  sendMessageSuccess } from '../actions/threads-actions-types';
import httpClient from './http-client';

function* createThreadHandler({
  payload: {
    callback, ...data
  },
}) {
  yield put(createThreadRequested());
  const payload = {
    data,
    method: 'post',
    url: 'threads',
  };
  const {
    result, error,
  } = yield call(httpClient, payload, false);

  if (error) {
    yield put(createThreadFailure(error));
  } else if (callback) {
    callback(result.payload._id);
  }
}

export function* fetchThreads({ payload: query }) {
  yield put(fetchThreadsRequested());
  const payload = {
    method: 'get',
    url: `threads${query}`,
  };
  const {
    result, error,
  } = yield call(httpClient, payload, false);

  if (error) {
    yield put(fetchThreadsFailure(error));
  } else {
    const rooms = yield select(({ threads: { threads: list } }) => list);
    const mappedThreads = {};

    result.payload.results.forEach((thread) => {
      if (!Object.keys(rooms).includes(thread._id)) {
        mappedThreads[thread._id] = {
          ...thread,
          messages: [],
        };
      }
    });

    const response = {
      count: result.payload.count,
      results: mappedThreads,
    };

    yield put(fetchThreadsSuccess(response));
  }
}

export function* sendMessageHandler({ payload: data }) {
  yield put(sendMessageRequested());
  const messageData = { ...data };
  const payload = {
    data: messageData,
    method: 'post',
    url: 'messages',
  };
  const {
    result, error,
  } = yield call(httpClient, payload, false);

  if (error) {
    yield put(sendMessageFailure(error));
  } else {
    const message = {
      ...result.payload,
      unreadCount: 0,
    };

    yield put(sendMessageSuccess(message));
  }
}

export function* fetchMessagesHandler({
  payload: request,
  payload: {
    query, receiver, thread, source, type,
  },
}) {
  const rooms = yield select(({ threads: { threads: list } }) => list);
  const isThreadExists = Object.keys(rooms).includes(thread._id);

  if (isThreadExists) {
    yield put(fetchMessagesRequested());
    const payload = {
      method: 'get',
      url: `messages${query}`,
    };
    const {
      result, error,
    } = yield call(httpClient, payload, false);

    if (error) {
      yield put(fetchMessagesFailure(error));
    } else {
      const res = {
        messages: result.payload.results,
        receiver,
        source,
        threadId: thread._id,
        totalPages: result.payload.count,
        type,
      };

      yield put(fetchMessagesSuccess(res));
    }
  } else {
    yield put(fetchThreadDetail(request));
  }
}

function* fetchThreadDetailHandler({
  payload: request, payload: { thread },
}) {
  yield put(fetchThreadDetailRequested());
  const payload = {
    method: 'get',
    url: `threads?threadId=${thread._id}`,
  };
  const {
    result, error,
  } = yield call(httpClient, payload);

  if (error) {
    yield put(fetchThreadDetailFailure(error));
  } else {
    yield put(fetchThreadDetailSuccess(result.payload.results));
    yield delay(500);
    yield put(fetchMessages(request));
  }
}

function* threads() {
  yield all([
    takeLatest(CREATE_THREAD, createThreadHandler),
    takeLatest(FETCH_MESSAGES, fetchMessagesHandler),
    takeLatest(FETCH_THREAD_DETAIL, fetchThreadDetailHandler),
    takeLatest(FETCH_THREADS, fetchThreads),
    takeLatest(SEND_MESSAGE, sendMessageHandler),
  ]);
}

export default threads;
