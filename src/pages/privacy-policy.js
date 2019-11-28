import React from 'react';
import Privacy from '../containers/privacy-policy';
import PublicLayout from '../layouts/public-layout';
import { auth } from '../utilities/auth-helpers';

const PrivacyContainer = () => <PublicLayout component={Privacy} />;

PrivacyContainer.getInitialProps = async (props) => auth(props.ctx, 'public');

export default PrivacyContainer;
