import React from 'react';
import Login from '../containers/login';
import PublicLayout from '../layouts/public-layout';
import { auth } from '../utilities/auth-helpers';

const LoginContainer = () => <PublicLayout title='Login' component={Login} />;

LoginContainer.getInitialProps = async (props) => auth(props.ctx, 'public');

export default LoginContainer;
