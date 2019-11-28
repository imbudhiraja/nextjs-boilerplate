import React from 'react';
import { PageHeader, Menu, Icon, Button, Dropdown } from 'antd';
import { func, shape, string } from 'prop-types';
import Methods from '../../utilities/methods';

const MessageHeader = ({
  receiver: {
    firstname, lastname, profileImage,
  },
  spot: { title },
  onMore,
}) => {
  const name = `${firstname} ${lastname}`.capitalizeEachLetter();

  const menu = (
    <Menu onClick={onMore}>
      <Menu.Item key='help-center'>
        {'Visit Help Center'}
      </Menu.Item>
      <Menu.Item key='report-user'>
        Report User
      </Menu.Item>
    </Menu>
  );

  const DropdownMenu = () => (
    <Dropdown key="more-options" trigger='click' overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <Icon type="ellipsis" />
      </Button>
    </Dropdown>
  );

  return (
    <PageHeader
      className='header'
      avatar={{ src: Methods.download(profileImage) }}
      extra={[<DropdownMenu key="more" />]}
      title={name}
      subTitle={title}
    />
  );
};

MessageHeader.propTypes = {
  onMore: func.isRequired,
  receiver: shape({
    name: string,
    profileImage: string,
  }).isRequired,
  spot: shape({ title: string.isRequired }).isRequired,
};

export default MessageHeader;
