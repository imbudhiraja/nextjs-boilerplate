import React from 'react';
import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy';
import sortBy from 'lodash/sortBy';
import { func, shape, string, number } from 'prop-types';
import debounce from 'lodash/debounce';
import Idx from 'idx';
import { Input, Button, notification as Toast } from 'antd';
import ThreadList from './threads';
import Messages from './messages';
import MessageHeader from './message-header';
import Methods from '../../utilities/methods';
import * as threadActions from '../../actions/threads-actions-types';
import * as userActions from '../../actions/user-actions-types';

class Thread extends React.Component {
  static propTypes = () => ({
    createThread: func.isRequired,
    fetchMessages: func.isRequired,
    fetchMessagesStatus: string.isRequired,
    fetchThreads: func.isRequired,
    fetchThreadsStatus: string.isRequired,
    refreshRoomsList: func.isRequired,
    threads: shape().isRequired,
    totalThreads: number.isRequired,
  });

  messagesRef = React.createRef();
  isLoadMore = false;

  fetchThreads = debounce(() => {
    const {
      fetchThreads, threads,
    } = this.props;
    const rooms = Object.keys(threads).map((key) => threads[key]);
    const querystring = Methods.getQuery({ skip: rooms.length });

    fetchThreads(querystring);
  }, 500);

  constructor(props) {
    super(props);

    this.state = {
      detail: null,
      message: '',
      reason: '',
      type: '',
    };

    props.refreshRoomsList();
    this.currentChatRoom = null;
    this.fetchThreads();
  }

  componentDidUpdate(prevProps) {
    const {
      reportUserStatus, sendMessageStatus,
    } = this.props;

    if (sendMessageStatus === 'success' && sendMessageStatus !== prevProps.sendMessageStatus) {
      this.onSendSuccess();
    }

    if (reportUserStatus === 'success' && reportUserStatus !== prevProps.reportUserStatus) {
      this.onReportSuccess();
    }

    this.onScroll(prevProps);
  }

  onReportSuccess=() => {
    this.setState({
      reason: '',
      type: '',
    });
  }

  onSendSuccess = () => {
    this.setState({ message: '' });
  }

  onScroll = (prevProps) => {
    const { threads } = this.props;
    const list = Idx(threads[this.currentChatRoom], (_) => _.messages);

    const { threads: prevThreads } = prevProps;
    const prevList = Idx(prevThreads[this.currentChatRoom], (_) => _.messages);

    if (list && prevList && list.length !== prevList.length && this.messagesRef.current) {
      const scrollView = document.getElementById('messages-list');

      if (scrollView && scrollView.scrollHeight) {
        scrollView.scrollTop = this.isLoadMore ? scrollView.scrollTop + 100 : scrollView.scrollHeight;
      }
    }
  }

  mapMessagesWithThreads = () => {
    const {
      threads, token,
    } = this.props;

    let messages = [];

    let loadEarlier = false;
    const singleThread = threads[this.currentChatRoom];
    const list = Idx(threads[this.currentChatRoom], (_) => _.messages);

    if (this.currentChatRoom && singleThread && list) {
      loadEarlier = list.length < singleThread.totalPages;
      messages = list.map((singleMessage) => {
        const updatedMessage = {
          ...singleMessage,
          text: singleMessage.message,
          token,
          user: {
            ...singleMessage.from,
            avatar: singleMessage.from.profileImage === '' ? '' : Methods.download(singleMessage.from.profileImage),
            name: `${singleMessage.from.firstname} ${singleMessage.from.lastname}`.capitalizeEachLetter(),
          },
        };

        return updatedMessage;
      });
    }

    return {
      loadEarlier,
      messages: sortBy(messages, 'createdAt').reverse(),
    };
  };

  fetchMessages = (thread, skip) => {
    const {
      fetchMessages, userDetails: { _id },
    } = this.props;

    const user = thread.members.find(({ userId }) => userId && userId._id !== _id);

    if (!user) {
      Toast.error({
        btn: null,
        message: 'User is no longer available on platform.',
      });
      this.currentChatRoom = null;
      this.setState({ detail: null });

      return;
    }

    if ([3, 4].includes(thread.spotId.status)) {
      Toast.error({
        btn: null,
        message: 'Ad is no longer available on platform.',
      });
      this.currentChatRoom = null;
      this.setState({ detail: null });

      return;
    }

    this.currentChatRoom = thread._id;
    const query = `?skip=${skip}&limit=10&threadId=${thread._id}`;
    const request = {
      query,
      receiver: user.userId,
      source: 'threads',
      thread,
    };

    fetchMessages(request);
    this.setState({
      detail: {
        receiver: user.userId,
        spot: thread.spotId,
      },
      thread,
    });
  }

  onHandleChange = ({
    target: {
      name, value,
    },
  }) => {
    this.setState({ [name]: value });
  };

  onSend = () => {
    const {
      createThread,
      sendMessage,
    } = this.props;
    const {
      message, detail: {
        receiver, spot,
      },
    } = this.state;
    const spotId = spot._id;
    const request = { message: message.trim() };

    if (!message.trim().length) {
      return;
    }

    if (!this.currentChatRoom) {
      request.members = [{
        isAdmin: false,
        userId: receiver._id,
      }];
      request.spotId = spotId;

      createThread(request);

      return;
    }

    request.threadId = this.currentChatRoom;
    request.type = 'message';
    sendMessage(request);
  }

  onThreadsLoadMore = () => {
    this.fetchThreads();
  }

  onLoadMoreMessages = () => {
    const { fetchMessagesStatus } = this.props;
    const { thread } = this.state;
    const scrollView = document.getElementById('messages-list');
    const {
      loadEarlier, messages,
    } = this.mapMessagesWithThreads();

    if (!loadEarlier) {
      return;
    }

    if (scrollView && scrollView.scrollTop === 0 && fetchMessagesStatus !== 'fetching') {
      this.isLoadMore = true;
      this.fetchMessages(thread, messages.length);
    }
  }

  onSubmit=() => {
    const {
      reason, type, detail: { receiver },
    } = this.state;
    const { reportUser } = this.props;
    const request = {
      report: {
        description: reason,
        reason: type,
      },
      user: receiver._id,
    };

    reportUser(request);
  }

  render() {
    const {
      message, detail,
    } = this.state;
    const {
      threads,
      fetchThreadsStatus,
      fetchMessagesStatus,
      sendMessageStatus,
      totalThreads,
      userDetails: { _id: userId },
    } = this.props;
    const {
      messages, loadEarlier,
    } = this.mapMessagesWithThreads();

    let rooms = Object.keys(threads).map((key) => threads[key]);

    rooms = sortBy(rooms, 'updatedAt').reverse();
    rooms = uniqBy(rooms, '_id');

    return (
      <section className="content-area">
        <div className="container-fluid">
          <div className="container">
            <div className="wrapper">
              <h1 className="title">Messages</h1>
              <div className="row">
                <div className="col-md-5 threads">
                  <ThreadList
                    loading={fetchThreadsStatus === 'fetching'}
                    threads={[...rooms]}
                    total={totalThreads}
                    onLoadMore={this.onThreadsLoadMore}
                    onThreadClick={(e, skip) => {
                      this.isLoadMore = false;
                      this.fetchMessages(e, skip);
                    }}
                    userId={userId}
                  />
                </div>
                <div className="col-md-7 messages">
                  {this.currentChatRoom && detail && messages.length > 0 && (
                    <React.Fragment>
                      <div>
                        <MessageHeader
                          {...detail}
                          onMore={this.onMore}
                        />
                        <Messages
                          ref={this.messagesRef}
                          loading={fetchMessagesStatus === 'fetching'}
                          messages={[...messages]}
                          userId={userId}
                          hasMoreRecords={loadEarlier}
                          onLoadMore={() => this.onLoadMoreMessages(loadEarlier)}
                          getScrollParent={(ref) => { this.scrollRef = ref; }}
                        />
                      </div>
                      <div className='row input-toolbar'>
                        <Input.TextArea
                          placeholder="Write here..."
                          rows={4}
                          value={message}
                          name='message'
                          onChange={this.onHandleChange}
                          className='composer'
                        />
                        <Button
                          type="primary"
                          loading={sendMessageStatus === 'sending'}
                          onClick={this.onSend}
                        >
                          Send
                        </Button>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({
  threads: {
    threads,
    fetchMessagesStatus,
    sendMessageStatus,
    fetchThreadsStatus,
    totalThreads,
  },
  user: {
    reportUserStatus,
    userDetails,
  },
}) => ({
  fetchMessagesStatus,
  fetchThreadsStatus,
  reportUserStatus,
  sendMessageStatus,
  threads,
  totalThreads,
  userDetails,
});

export default connect(
  mapStateToProps,
  {
    createThread: threadActions.createThread,
    fetchMessages: threadActions.fetchMessages,
    fetchThreads: threadActions.fetchThreads,
    refreshRoomsList: threadActions.refreshRoomsList,
    reportUser: userActions.reportUser,
    sendMessage: threadActions.sendMessage,
  },
)(Thread);
