import React from 'react';
import { Avatar, List } from 'antd';
import { number, shape, string } from 'prop-types';
import moment from 'moment';

const Messages = ({
  text, user, createdAt,
}) => (
  <List.Item>
    <div>
      <List.Item.Meta
        avatar={(
          <Avatar
            size='large'
            icon="user"
            src={user.avatar}
          />
        )}
        title={user.name}
        description={text}
      >
      </List.Item.Meta>
      <div className='ant-list-item-meta-title message-time'>
        {moment(createdAt).fromNow()}
      </div>
    </div>
  </List.Item>
);

Messages.propTypes = {
  createdAt: number.isRequired,
  text: string.isRequired,
  user: shape({
    avatar: string.isRequired,
    name: string.isRequired,
  }).isRequired,
};

export default Messages;
