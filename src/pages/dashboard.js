import React from 'react';
import Dashboard from '../containers/dashboard';
import PrivateLayout from '../layouts/private-layout';
import { auth } from '../utilities/auth-helpers';

const DashboardContainer = () => <PrivateLayout component={Dashboard} />;

DashboardContainer.getInitialProps = async (props) => auth(props.ctx);

export default DashboardContainer;
