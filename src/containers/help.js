import React from 'react';
import { connect } from 'react-redux';

class Help extends React.Component {
  state = {};

  render() {
    return <div>Help</div>;
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(Help);
