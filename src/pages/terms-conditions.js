import React from 'react';
import TermsConditions from '../containers/terms-conditions';
import PublicLayout from '../layouts/public-layout';
import { auth } from '../utilities/auth-helpers';

const TermsConditionsContainer = () => <PublicLayout component={TermsConditions} />;

TermsConditionsContainer.getInitialProps = async (props) => auth(props.ctx, 'public');

export default TermsConditionsContainer;
