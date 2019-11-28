import React from 'react';
import Help from '../containers/help';
import PublicLayout from '../layouts/public-layout';
import { auth } from '../utilities/auth-helpers';

const HelpContainer = () => <PublicLayout component={Help} />;

HelpContainer.getInitialProps = async (props) => auth(props.ctx, 'public');

export default HelpContainer;
