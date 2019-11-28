import React from 'react';
import PropTypes from 'prop-types';
import Head from './head';
import Header from './header';
import Footer from './footer';

const PrivateLayout = ({ component: Component }) => (
  <React.Fragment>
    <Head />
    <Header />
    <Component />
    <Footer />
  </React.Fragment>
);

PrivateLayout.propTypes = { component: PropTypes.any.isRequired };

export default PrivateLayout;
