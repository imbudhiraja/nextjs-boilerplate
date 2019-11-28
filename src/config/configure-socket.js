/* eslint-disable no-console */
import io from 'socket.io-client';
import { createThreadSuccess, sendMessageSuccess } from '../actions/threads-actions-types';

let socketClient = null;

class SocketClient {
  constructor(options) {
    const {
      token, dispatch, userId,
    } = options;

    this.token = token;
    this.userId = userId;
    this.dispatch = dispatch;
    this.connection = io.connect(process.env.SOCKET_URL);
    this.close = this.close.bind(this);
    this.socketHandler(options);
  }

  socketHandler() {
    const context = this;

    context.connection.on('connect_error', (error) => {
      console.log('socket - connect_error', JSON.stringify(error));
    });

    context.connection.on('reconnect_error', (error) => {
      console.log('socket - reconnect_error', JSON.stringify(error));
    });

    context.connection.on('connect', () => {
      console.log('socket - connected', this.token);
      context.connection.emit('authenticate', { token: this.token }, (res) => {
        console.log('socket - authenticated', res);
      });
    });

    context.connection.on('disconnect', () => {
      console.log('socket - disconnected');
    });

    context.connection.on('newChatRoomCreated', (response) => {
      console.log('socket - thread created ', response);
      if (response.content.thread) {
        context.dispatch(createThreadSuccess(response.content.thread));
      }
    });

    context.connection.on('newMessage', (response) => {
      console.log('socket - message received ', response);
      const message = {
        ...response.content.message,
        threadDetail: response.content.thread,
        threadId: response.content.thread._id, //eslint-disable-line
        unreadCount: response.content.unreadCount,
      };

      // MARK ROOM AS READ ONLY IF USER IS IN SAME CHAT ROOM
      // eslint-disable-next-line no-undef
      if (message.threadId === currentChatRoom) {
        message.unreadCount = 0;
        this.markRoomRead(message);
      }

      context.dispatch(sendMessageSuccess(message));
    });

    context.connection.on('messageRead', (response) => {
      console.log('socket - message read ', response);
    });

    context.connection.on('unreadCounts', (response) => {
      console.log('socket - unread counts ', response);
    });
  }

  markRoomRead = ({ _id: messageId }) => {
    const context = this;

    context.connection.emit('markMessageRead', {
      message_id: messageId,
      user_id: context.userId,
    });
  };

  close = () => {
    this.connection.close();
  };
}

const createSocketClient = (options) => {
  if (!socketClient) {
    socketClient = new SocketClient(options);
  }

  return socketClient;
};

export const getSocketClient = () => socketClient;

export const closeConnection = () => {
  if (socketClient) {
    socketClient.close();
    socketClient = null;
  }
};

export default createSocketClient;
