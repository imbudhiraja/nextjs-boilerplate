import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  state = {};

  render() {
    return (
      <section className="content-area">
        <div className="container-fluid">
          Dashboard
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ user: { userDetails } }) => ({ userDetails });

export default connect(mapStateToProps, null)(Dashboard);
