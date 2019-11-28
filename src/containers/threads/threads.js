import React from 'react';
import { List } from 'antd';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import SingleThread from './single-thread';

const Threads = ({
  loading, threads, onLoadMore, total, onThreadClick, userId,
}) => (
  <InfiniteScroll
    initialLoad={false}
    pageStart={0}
    loadMore={onLoadMore}
    hasMore={threads && threads.length < total}
    useWindow={false}
  >
    <List
      loading={loading}
      itemLayout="horizontal"
      dataSource={threads}
      renderItem={(item) => <SingleThread {...item} userId={userId} onThreadClick={() => onThreadClick(item, 0)} />}
    />
  </InfiniteScroll>
);

Threads.propTypes = {
  loading: bool.isRequired,
  onLoadMore: func.isRequired,
  onThreadClick: func.isRequired,
  threads: arrayOf(shape({ _id: string.isRequired })).isRequired,
  total: number.isRequired,
  userId: string.isRequired,
};

export default Threads;
