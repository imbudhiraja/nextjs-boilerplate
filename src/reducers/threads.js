import uniqBy from 'lodash/uniqBy';
import cloneDeep from 'lodash/cloneDeep';
import idx from 'idx';
import { LOGOUT_SUCCESS,
  DELETE_ACCOUNT_SUCCESS } from '../actions/user-actions-types';
import { CREATE_THREAD_FAILURE,
  CREATE_THREAD_REQUESTED,
  CREATE_THREAD_SUCCESS,
  FETCH_THREADS_FAILURE,
  FETCH_THREADS_REQUESTED,
  FETCH_THREADS_SUCCESS,
  FETCH_THREAD_DETAIL_FAILURE,
  FETCH_THREAD_DETAIL_REQUESTED,
  FETCH_THREAD_DETAIL_SUCCESS,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_REQUESTED,
  FETCH_MESSAGES_FAILURE,
  REFRESH_ROOMS_LIST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUESTED } from '../actions/threads-actions-types';

const initialState = {
  createThreadStatus: 'fetching',
  fetchMessagesStatus: 'fetching',
  fetchThreadDetailStatus: 'fetching',
  fetchThreadsStatus: 'fetching',
  sendMessageStatus: 'sending',
  threads: {},
  totalThreads: 0,
};

export default function conversations(state = initialState, {
  payload, type,
}) {
  const threads = cloneDeep(state.threads);

  switch (type) {
    case CREATE_THREAD_FAILURE:
      return {
        ...state,
        createThreadStatus: 'failure',
        sendMessageStatus: 'failure',
      };

    case CREATE_THREAD_REQUESTED:
      return {
        ...state,
        createThreadStatus: 'sending',
        sendMessageStatus: 'sending',
      };

    case CREATE_THREAD_SUCCESS: {
      const messages = idx(payload, (_) => _.lastMessage.messageId) ? [payload.lastMessage.messageId] : [];

      return {
        ...state,
        createThreadStatus: 'success',
        sendMessageStatus: 'success',
        threads: {
          ...threads,
          [payload._id]: {
            ...payload,
            messages,
          },
        },
      };
    }

    case FETCH_THREAD_DETAIL_FAILURE:
      return {
        ...state,
        fetchThreadDetailStatus: 'failure',
      };

    case FETCH_THREAD_DETAIL_REQUESTED:
      return {
        ...state,
        fetchThreadDetailStatus: 'sending',
      };

    case FETCH_THREAD_DETAIL_SUCCESS: {
      return {
        ...state,
        fetchThreadDetailStatus: 'success',
        threads: {
          ...threads,
          [payload._id]: {
            ...payload,
            messages: [],
          },
        },
      };
    }

    case FETCH_THREADS_REQUESTED:
      return {
        ...state,
        fetchThreadsStatus: 'fetching',
      };

    case FETCH_THREADS_SUCCESS:
      return {
        ...state,
        fetchThreadsStatus: 'success',
        threads: {
          ...threads,
          ...payload.results,
        },
        totalThreads: payload.count,
      };

    case FETCH_THREADS_FAILURE:
      return {
        ...state,
        fetchThreadsStatus: 'failure',
      };

    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        fetchMessagesStatus: 'failure',
      };

    case FETCH_MESSAGES_REQUESTED:
      return {
        ...state,
        fetchMessagesStatus: 'fetching',
      };

    case FETCH_MESSAGES_SUCCESS: {
      let singleThreadMessages = [];

      let data = { ...state };

      if (threads[payload.threadId]) {
        singleThreadMessages = threads[payload.threadId].messages ? threads[payload.threadId].messages : [];

        data = {
          ...data,
          threads: {
            ...threads,
            [payload.threadId]: {
              ...threads[payload.threadId],
              messages: uniqBy([...singleThreadMessages, ...payload.messages], '_id'),
              totalPages: payload.totalPages,
              unreadCount: 0,
            },
          },
        };
      }

      return {
        ...data,
        fetchMessagesStatus: 'success',
        sendMessageStatus: 'success',
      };
    }

    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        sendMessageStatus: 'failure',
      };

    case SEND_MESSAGE_REQUESTED:
      return {
        ...state,
        sendMessageStatus: 'sending',
      };

    case SEND_MESSAGE_SUCCESS: {
      const recentMessages = threads[payload.threadId]
        && threads[payload.threadId].messages ? threads[payload.threadId].messages : [];

      return {
        ...state,
        sendMessageStatus: 'success',
        threads: {
          ...threads,
          [payload.threadId]: {
            ...threads[payload.threadId],
            lastMessage: { messageId: { ...payload } },
            messages: uniqBy([payload, ...recentMessages], '_id'),
            unreadCount: payload.unreadCount,
            updatedAt: payload.updatedAt,
          },
        },
      };
    }

    case LOGOUT_SUCCESS:
      return initialState;

    case DELETE_ACCOUNT_SUCCESS:
      return initialState;

    case REFRESH_ROOMS_LIST:
      return initialState;

    default:
      return state;
  }
}
