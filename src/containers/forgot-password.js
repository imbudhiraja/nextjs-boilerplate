import React from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../actions/user-actions-types';

import Regex from '../utilities/regex';

class ForgotPassword extends React.Component {
  static propTypes = { forgetPassword: func.isRequired };

  state = {
    email: '', error: {},
  };

  onHandleChange = (event) => {
    const { value } = event.target;

    this.setState({ email: value });
  }

  onSubmit = () => {
    const { email } = this.state;
    const { forgetPassword } = this.props;

    if (!Regex.email(email)) {
      this.setState({ error: { email: 'Enter a valid email' } });

      return;
    }

    this.setState({ error: {} });
    forgetPassword({ email });
  }

  render() {
    const {
      email, error,
    } = this.state;

    return (
      <div>
        <div className="login-text-container">
          <h1 className="login-heading">
              Forgot Your password?
          </h1>
          <Form>
            <Form.Item
                validateStatus={!isEmpty(error.email) ? 'error' : ''}     //eslint-disable-line
              help={error.email}
            >
              <Input
                name="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={this.onHandleChange}
                className="email-input"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block htmlType="submit" onClick={this.onSubmit} className="signin-button">
                  RESET PASSWORD
              </Button>
            </Form.Item>
            <div className="centered">
              <p>
                {'Having trouble? '}
                <Link href="/help">
                  <a href="/help">
                    Get Help
                  </a>
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { loginError } }) => ({ loginError });

export default connect(mapStateToProps, { forgetPassword: userActions.forgotPassword })(ForgotPassword);
