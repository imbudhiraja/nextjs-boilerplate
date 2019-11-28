import React from 'react';
import PropTypes from 'prop-types';
import Head from './head';

const PublicLayout = ({
  title, component: Component,
}) => (
  <div className='public-layout'>
    <Head />
    <div className="flex-container">
      <div className="login-container">
        {title && (
          <h6 className="heading">
            {title}
          </h6>
        ) }
        <Component />
      </div>
    </div>
  </div>
);

PublicLayout.propTypes = {
  component: PropTypes.any.isRequired,
  title: PropTypes.string,
};
PublicLayout.defaultProps = { title: '' };

export default PublicLayout;
