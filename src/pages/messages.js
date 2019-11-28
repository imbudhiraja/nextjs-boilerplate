import React from 'react';
import Threads from '../containers/threads';
import PrivateLayout from '../layouts/private-layout';
import { auth } from '../utilities/auth-helpers';

const Messages = () => <PrivateLayout component={Threads} />;

Messages.getInitialProps = async (props) => auth(props.ctx);

export default Messages;
