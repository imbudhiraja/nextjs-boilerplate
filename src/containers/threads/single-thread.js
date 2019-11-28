import React from 'react';
import { Badge, Icon, Avatar, List } from 'antd';
import { arrayOf, func, number, shape, string } from 'prop-types';
import moment from 'moment';
import Methods from '../../utilities/methods';

const SingleThread = ({
  members = [],
  type: roomType,
  title = '',
  onThreadClick,
  unreadCount = 0,
  userId,
  lastMessage,
  updatedAt,
  threadIcon = null,
  spotId,
}) => {
  const avatarProps = {
    rounded: true,
    size: 40,
  };

  let receiver = {};

  let content = null;

  if (roomType === 'group') {
    receiver.name = title;
    receiver.profileImage = threadIcon;
  } else {
    receiver = members.length > 1 && members.find(({ userId: user }) => user && user._id !== userId);

    if (receiver) {
      receiver = {
        ...receiver.userId,
        name: `${receiver.userId.firstname} ${receiver.userId.lastname}`.capitalizeEachLetter(),
      };
      if (receiver.profileImage) {
        avatarProps.source = Methods.download(receiver.profileImage);
      }
    } else {
      receiver = {
        name: 'Parkao User',
        profileImage: '',
      };
    }
  }

  if (lastMessage.messageId) {
    switch (lastMessage.messageId.type) {
      case 'text':
        content = lastMessage.messageId.message;
        break;

      default:
        content = lastMessage.messageId.message;
        break;
    }
  }

  return (
    <List.Item onClick={onThreadClick}>
      <div>
        <List.Item.Meta
          avatar={unreadCount > 0 ? (
            <Badge count={unreadCount} overflowCount={9}>
              <Avatar size='large' src={avatarProps.source} icon="user" />
            </Badge>
          ) : (
            <Avatar
              size='large'
              icon={<Icon type="user" />}
              src={avatarProps.source}
            />
          )}
          title={receiver.name}
          description={content}
        >
        </List.Item.Meta>
        <div className='ant-list-item-meta-title spot-title'>
          {spotId.title.capitalizeEachLetter()}
        </div>
        <div className='ant-list-item-meta-title thread-time'>
          {moment(updatedAt).fromNow()}
        </div>
      </div>
    </List.Item>
  );
};

SingleThread.propTypes = {
  lastMessage: shape({
    message: string,
    type: string,
  }).isRequired,
  members: arrayOf(
    shape({
      name: string,
      profileImage: string,
    }),
  ),
  onThreadClick: func.isRequired,
  spotId: shape({ title: string }),
  threadIcon: string,
  title: string.isRequired,
  type: string.isRequired,
  unreadCount: number,
  updatedAt: number.isRequired,
  userId: string.isRequired,
};

SingleThread.defaultProps = {
  members: [],
  spotId: null,
  threadIcon: null,
  unreadCount: 0,
};

export default SingleThread;
