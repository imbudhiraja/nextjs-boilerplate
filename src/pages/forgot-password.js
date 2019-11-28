
import React from 'react';
import ForgotPassword from '../containers/forgot-password';
import PublicLayout from '../layouts/public-layout';
import { auth } from '../utilities/auth-helpers';

const ForgotPasswordContainer = () => <PublicLayout component={ForgotPassword} />;

ForgotPasswordContainer.getInitialProps = async (props) => auth(props.ctx, 'public');

export default ForgotPasswordContainer;
