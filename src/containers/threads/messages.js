import React from 'react';
import { List } from 'antd';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import SingleMessage from './single-message';

const Messages = ({
  loading, messages, onLoadMore, userId,
}, ref) => (
  <List
    ref={ref}
    id='messages-list'
    className='messages-container'
    position='top'
    loading={loading}
    itemLayout="horizontal"
    dataSource={messages.reverse()}
    renderItem={(item) => <SingleMessage {...item} userId={userId} />}
    onScroll={onLoadMore}
  />
);

Messages.propTypes = {
  hasMoreRecords: bool.isRequired,
  loading: bool.isRequired,
  messages: arrayOf(shape({ _id: string.isRequired })).isRequired,
  onLoadMore: func.isRequired,
  userId: string.isRequired,
};

export default React.forwardRef(Messages);
