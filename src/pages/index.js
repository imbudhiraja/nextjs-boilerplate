import React from 'react';
import Login from '../containers/login';
import PublicLayout from '../layouts/public-layout';
import { auth } from '../utilities/auth-helpers';
import 'antd/dist/antd.css';
import '../../public/static/css/bootstrap.min.css';
import '../../public/static/css/style.css';

const LoginContainer = () => <PublicLayout title='Login' component={Login} />;

LoginContainer.getInitialProps = async (props) => auth(props.ctx, 'public');

export default LoginContainer;
