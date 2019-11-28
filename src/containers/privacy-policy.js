import React from 'react';
import { connect } from 'react-redux';

class PrivacyPolicy extends React.Component {
  state = {};

  render() {
    return <div>Privacy Policy</div>;
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(PrivacyPolicy);
