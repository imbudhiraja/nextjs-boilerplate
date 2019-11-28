import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { notification, Spin, Icon } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import isEqual from 'lodash/isEqual';
import configureStore from '../config/configure-store';
import configureSentry from '../config/configure-sentry';
import { RouteLoader } from '../components';
import createSocketClient, { getSocketClient } from '../config/configure-socket';
import configureBranchIO from '../config/configure-branch.io';
import configureNotifications from '../config/configure-notifications';
import 'antd/dist/antd.css';
import '../../public/static/css/bootstrap.min.css';
import '../../public/static/css/style.css';

notification.config({ duration: 1 });

class Boilerplate extends App {
  static async getInitialProps({
    Component, ctx,
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  state={ visible: false }

  componentDidMount() {
    const { store } = this.props;

    configureSentry();
    store.subscribe(this.handleChange);

    if ('serviceWorker' in navigator) {
      configureBranchIO(store);
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then((registration) => {
          // eslint-disable-next-line no-console
          console.log('service-worker registration success --> ', registration);
          configureNotifications(store, registration);
        }).catch((e) => {
          // eslint-disable-next-line no-console
          console.log('service-worker registration error --> ', e);
        });
      });
    }
  }

  handleChange = () => {
    const { store } = this.props;
    const {
      app: { visible },
      user: {
        token, userDetails,
      },
    } = store.getState();

    this.setState({ visible });

    if (token !== '' && !isEqual(token, this.prevToken) && userDetails) {
      const { _id: userId } = userDetails;

      this.prevToken = token;
      this.prevUserId = userId;
      if (!getSocketClient()) {
        createSocketClient({
          dispatch: store.dispatch,
          token,
          userId: userDetails._id,
        });
      }
    }
  };

  render() {
    const {
      Component, pageProps, store,
    } = this.props;
    const { visible } = this.state;

    return (
      <Provider store={store}>
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          <Component {...pageProps} />
          <RouteLoader />
          {visible && (
            <Spin
              size='large'
              className='loader'
              indicator={<Icon type="loading" spin />}
            />
          )}
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(Boilerplate));
