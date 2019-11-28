import React from 'react';
import { connect } from 'react-redux';

class FAQs extends React.Component {
  state = {};

  render() {
    return (
      <section className="content-area">
        <div className="container-fluid">
          FAQs
        </div>
      </section>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(FAQs);
