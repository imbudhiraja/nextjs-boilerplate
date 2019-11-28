import { call, select, put, delay } from 'redux-saga/effects';
import { notification } from 'antd';
import Idx from 'idx';
import Router from 'next/router';
import { showLoader, hideLoader } from '../actions/app-actions-types';
import { logoutSuccess, setAuthenticationToken } from '../actions/user-actions-types';
import axiosInstance from '../utilities/axios-instance';
import { setCookies } from '../utilities/auth-helpers';

function* HttpClient(payload, isLoader = true, authorization = true) {
  if (!navigator.onLine) {
    return {
      error: true,
      result: null,
    };
  }

  if (isLoader) {
    yield put(showLoader());
    yield delay(250);
  }
  const data = { ...payload };

  if (authorization) {
    const authToken = yield select(({ user: { token } }) => token);

    if (authToken) {
      data.headers = { 'x-authorization': authToken };
    } else {
      yield put(hideLoader());

      return {
        error: true,
        result: null,
      };
    }
  }

  // eslint-disable-next-line no-console
  console.log('request payload ----> ', data);

  try {
    const {
      data: result,
      headers: { 'x-authorization': authentication = '' },
    } = yield call(axiosInstance, data);

    yield put(hideLoader());

    if (authentication) {
      setCookies(true);
      yield put(setAuthenticationToken(authentication));
    }

    // eslint-disable-next-line no-console
    console.log(`response  ${data.url} success ----> `, result.payload);

    return {
      error: null,
      result,
    };
  } catch (error) {
    yield put(hideLoader());

    // eslint-disable-next-line no-console
    console.log('response error----> ', error);

    if (Idx(error, (_) => _.code)) {
      const content = { message: '' };

      if (error.code === 'ECONNABORTED') {
        content.message = 'Please try later our servers are not responding.';
      } else if (error.code === 401) {
        setCookies(null);
        yield delay(250);
        yield put(logoutSuccess());
        Router.push('/');
        content.message = error.message;
      } else {
        content.message = error.message;
      }

      notification.error(content);
    } else {
      const content = { message: error.message };

      notification.error(content);
    }

    return {
      error,
      result: null,
    };
  }
}

export default HttpClient;
