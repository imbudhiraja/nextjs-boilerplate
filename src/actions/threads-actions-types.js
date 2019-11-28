import { createAction } from 'redux-actions';

export const CREATE_THREAD = 'CREATE_THREAD';
export const createThread = createAction(CREATE_THREAD);

export const CREATE_THREAD_REQUESTED = 'CREATE_THREAD_REQUESTED';
export const createThreadRequested = createAction(CREATE_THREAD_REQUESTED);

export const CREATE_THREAD_SUCCESS = 'CREATE_THREAD_SUCCESS';
export const createThreadSuccess = createAction(CREATE_THREAD_SUCCESS);

export const CREATE_THREAD_FAILURE = 'CREATE_THREAD_FAILURE';
export const createThreadFailure = createAction(CREATE_THREAD_FAILURE);

export const DELETE_CONVERSATION = 'DELETE_CONVERSATION';
export const deleteConversation = createAction(DELETE_CONVERSATION);

export const DELETE_CONVERSATION_REQUESTED = 'DELETE_CONVERSATION_REQUESTED';
export const deleteConversationRequested = createAction(DELETE_CONVERSATION_REQUESTED);

export const DELETE_CONVERSATION_SUCCESS = 'DELETE_CONVERSATION_SUCCESS';
export const deleteConversationSuccess = createAction(DELETE_CONVERSATION_SUCCESS);

export const DELETE_CONVERSATION_FAILURE = 'DELETE_CONVERSATION_FAILURE';
export const deleteConversationFailure = createAction(DELETE_CONVERSATION_FAILURE);

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const fetchMessages = createAction(FETCH_MESSAGES);

export const FETCH_MESSAGES_REQUESTED = 'FETCH_MESSAGES_REQUESTED';
export const fetchMessagesRequested = createAction(FETCH_MESSAGES_REQUESTED);

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const fetchMessagesSuccess = createAction(FETCH_MESSAGES_SUCCESS);

export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';
export const fetchMessagesFailure = createAction(FETCH_MESSAGES_FAILURE);

export const FETCH_THREADS = 'FETCH_THREADS';
export const fetchThreads = createAction(FETCH_THREADS);

export const FETCH_THREADS_REQUESTED = 'FETCH_THREADS_REQUESTED';
export const fetchThreadsRequested = createAction(FETCH_THREADS_REQUESTED);

export const FETCH_THREADS_SUCCESS = 'FETCH_THREADS_SUCCESS';
export const fetchThreadsSuccess = createAction(FETCH_THREADS_SUCCESS);

export const FETCH_THREADS_FAILURE = 'FETCH_THREADS_FAILURE';
export const fetchThreadsFailure = createAction(FETCH_THREADS_FAILURE);

export const FETCH_THREAD_DETAIL = 'FETCH_THREAD_DETAIL';
export const fetchThreadDetail = createAction(FETCH_THREAD_DETAIL);

export const FETCH_THREAD_DETAIL_REQUESTED = 'FETCH_THREAD_DETAIL_REQUESTED';
export const fetchThreadDetailRequested = createAction(FETCH_THREAD_DETAIL_REQUESTED);

export const FETCH_THREAD_DETAIL_SUCCESS = 'FETCH_THREAD_DETAIL_SUCCESS';
export const fetchThreadDetailSuccess = createAction(FETCH_THREAD_DETAIL_SUCCESS);

export const FETCH_THREAD_DETAIL_FAILURE = 'FETCH_THREAD_DETAIL_FAILURE';
export const fetchThreadDetailFailure = createAction(FETCH_THREAD_DETAIL_FAILURE);

export const MARK_ROOM_AS_READ = 'MARK_ROOM_AS_READ';
export const markRoomAsRead = createAction(MARK_ROOM_AS_READ);

export const REFRESH_ROOMS_LIST = 'REFRESH_ROOMS_LIST';
export const refreshRoomsList = createAction(REFRESH_ROOMS_LIST);

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = createAction(SEND_MESSAGE);

export const SEND_MESSAGE_REQUESTED = 'SEND_MESSAGE_REQUESTED';
export const sendMessageRequested = createAction(SEND_MESSAGE_REQUESTED);

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const sendMessageSuccess = createAction(SEND_MESSAGE_SUCCESS);

export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
export const sendMessageFailure = createAction(SEND_MESSAGE_FAILURE);
