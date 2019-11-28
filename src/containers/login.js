import React from 'react';
import Link from 'next/link';
import { Icon, Form, Input, Button } from 'antd';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../actions/user-actions-types';
import Regex from '../utilities/regex';

class Login extends React.Component {
  static propTypes = {
    form: shape({ getFieldDecorator: func.isRequired }).isRequired,
    login: func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      login, form: { validateFields },
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        const request = {
          deviceToken: '',
          deviceType: 'browser',
          email: values.email,
          password: values.password,
        };

        login(request);
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;

    return (
      <Form>
        <Form.Item>
          {
            getFieldDecorator('email', {
              rules: [{
                message: 'Please enter email',
                pattern: Regex.email,
                required: true,
              }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="email"
                placeholder="EMAIL ADDRESS"
              />,
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('password', {
              rules: [{
                message: 'Please enter password',
                pattern: Regex.password,
                required: true,
              }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="password"
                placeholder="PASSWORD"
              />,
            )
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" block onClick={this.onSubmit}>
            SIGN IN
          </Button>
        </Form.Item>
        <div style={{ textAlign: 'center' }}>
          <Link href="/forgot-password">
            <a href="/forgot-password">
              Forgot Password?
            </a>
          </Link>
        </div>
      </Form>
    );
  }
}

const LoginForm = Form.create({ name: 'login-form' })(Login);

export default connect(null, { login: userActions.login })(LoginForm);
