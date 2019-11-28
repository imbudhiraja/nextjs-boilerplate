import { all, call, delay, put, takeLatest, select } from 'redux-saga/effects';
import MomentTimezone from 'moment-timezone';
import { notification } from 'antd';
import Router from 'next/router';
import { CHANGE_PASSWORD,
  changePasswordFailure,
  changePasswordRequested,
  changePasswordSuccess,
  DELETE_ACCOUNT,
  deleteAccountFailure,
  deleteAccountRequested,
  deleteAccountSuccess,
  FORGOT_PASSWORD,
  forgotPasswordFailure,
  forgotPasswordRequested,
  forgotPasswordSuccess,
  RESEND_EMAIL,
  resendEmailFailure,
  resendEmailRequested,
  resendEmailSuccess,
  LOGIN,
  loginFailure,
  loginRequested,
  loginSuccess,
  LOGOUT,
  logoutFailure,
  logoutSuccess,
  logoutRequested,
  REGISTER,
  registerFailure,
  registerRequested,
  SOCIAL_LOGIN,
  socialLoginFailure,
  socialLoginRequested,
  socialLoginSuccess,
  UPDATE_PROFILE,
  updateProfileFailure,
  updateProfileRequested,
  updateProfileSuccess,
  UPDATE_NOTIFICATION_SETTINGS,
  updateNotificationSettingsFailure,
  updateNotificationSettingsRequested,
  updateNotificationSettingsSuccess,
  FETCH_MY_PROFILE,
  fetchMyProfileFailure,
  fetchMyProfileRequested,
  fetchMyProfileSuccess,
  RESENT_VERIFICATION_MAIL,
  resentVerificationMailFailure,
  resentVerificationMailRequested,
  resentVerificationMailSuccess,
  SEND_SUGGESTIONS,
  sendSuggestionsFailure,
  sendSuggestionsRequested,
  sendSuggestionsSuccess,
  SET_NEW_PASSWORD,
  setNewPasswordFailure,
  setNewPasswordRequested,
  setNewPasswordSuccess,
  VERIFY_EMAIL,
  verifyEmailFailure,
  verifyEmailRequested,
  verifyEmailSuccess,
  REPORT_USER,
  reportUserFailure,
  reportUserRequested,
  reportUserSuccess,
  UPDATE_DEVICE_TOKEN,
  updateDeviceTokenFailure,
  updateDeviceTokenSuccess,
  updateDeviceTokenRequested } from '../actions/user-actions-types';
import httpClient from './http-client';
import { setCookies } from '../utilities/auth-helpers';

function* registerHandler({ payload: data }) {
  yield put(registerRequested(''));
  const payload = {
    data: { ...data },
    method: 'post',
    url: 'users',
  };
  const { error } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(registerFailure(error));
  } else {
    yield put(registerRequested('success'));
    yield delay(200);
    Router.push({
      pathname: '/verification',
      query: { email: data.email },
    }, '/verification');
  }
}

function* login({ payload: data }) {
  yield put(loginRequested());
  const token = yield select(({ user: { deviceToken } }) => deviceToken);

  const payload = {
    data: {
      ...data,
      deviceToken: token,
      deviceType: 'browser',
      timezone: MomentTimezone.tz.guess(),
    },
    method: 'post',
    url: 'users/login',
  };

  const {
    error, result,
  } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(loginFailure(null));
  } else {
    yield put(loginSuccess(result.payload));
    Router.push('/dashboard');
  }
}

function* changePasswordHandler({ payload: data }) {
  yield put(changePasswordRequested());
  const payload = {
    data,
    method: 'put',
    url: '/users/change-password',
  };
  const {
    error, result,
  } = yield call(httpClient, payload);

  if (error) {
    yield put(changePasswordFailure(error));
  } else {
    yield put(changePasswordSuccess());
    notification.success({ message: result.message });
  }
}

function* forgotPasswordHandler({ payload: data }) {
  yield put(forgotPasswordRequested());
  const payload = {
    data,
    method: 'put',
    url: 'users/forgot-password',
  };
  const { error } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(forgotPasswordFailure(error));
  } else {
    yield put(forgotPasswordSuccess());
    Router.push({
      pathname: '/reset-email-sent',
      query: { email: data.email },
    }, '/reset-email-sent');
  }
}

function* resendEmailHandler({ payload: data }) {
  yield put(resendEmailRequested());
  const payload = {
    data,
    method: 'put',
    url: 'users/forgot-password',
  };
  const {
    error, result,
  } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(resendEmailFailure());
  } else {
    yield put(resendEmailSuccess());
    notification.success({ message: result.message });
  }
}

function* socialLoginHandler({ payload: data }) {
  yield put(socialLoginRequested());
  const token = yield select(({ user: { deviceToken } }) => deviceToken);

  const payload = {
    data: {
      ...data,
      deviceToken: token,
      deviceType: 'browser',
      timezone: MomentTimezone.tz.guess(),
    },
    method: 'post',
    url: 'users/social-connect',
  };

  const {
    error, result,
  } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(socialLoginFailure(error));
  } else {
    yield put(socialLoginSuccess(result.payload));
    Router.push('/dashboard');
  }
}

function* logoutHandler() {
  yield put(logoutRequested());
  const payload = {
    method: 'put',
    url: 'users/logout',
  };
  const { error } = yield call(httpClient, payload);

  if (error) {
    yield put(logoutFailure(error));
  } else {
    yield put(logoutSuccess());
    setCookies(null);
    Router.push('/');
  }
}

function* deleteAccountHandler() {
  yield put(deleteAccountRequested());
  const payload = {
    method: 'delete',
    url: 'users/delete-account',
  };
  const { error } = yield call(httpClient, payload);

  if (error) {
    yield put(deleteAccountFailure(error));
  } else {
    yield put(deleteAccountSuccess());
    setCookies(null);
    Router.push('/');
  }
}

function* updateProfileHandler({ payload: data }) {
  yield put(updateProfileRequested());
  const cloneData = { ...data };
  const payload = {
    data: cloneData,
    method: 'put',
    url: 'users/edit-profile',
  };
  const {
    error, result,
  } = yield call(httpClient, payload);

  if (error) {
    yield put(updateProfileFailure(error));
  } else {
    notification.success({ message: result.message });
    yield put(updateProfileSuccess(result.payload));
    Router.push('/account-information');
  }
}

function* fetchMyProfileHandler() {
  yield put(fetchMyProfileRequested());
  const payload = {
    method: 'get',
    url: 'users/detail',
  };
  const {
    error, result,
  } = yield call(httpClient, payload, false);

  if (error) {
    yield put(fetchMyProfileFailure(error));
  } else {
    yield put(fetchMyProfileSuccess(result.payload));
  }
}

function* resentVerificationMailHandler({ payload: data }) {
  yield delay(250);
  yield put(resentVerificationMailRequested());
  const payload = {
    data,
    method: 'put',
    url: 'users/resend-email',
  };
  const {
    error, result,
  } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(resentVerificationMailFailure(error));
  } else {
    notification.success({ message: result.message });
    yield put(resentVerificationMailSuccess());
  }
}

function* updateNotificationSettingsHandler({ payload: data }) {
  yield put(updateNotificationSettingsRequested());
  const payload = {
    data,
    method: 'put',
    url: 'users/edit-notification',
  };
  const {
    error, result,
  } = yield call(httpClient, payload, false);

  if (error) {
    yield put(updateNotificationSettingsFailure(error));
  } else {
    yield put(updateNotificationSettingsSuccess(data));
    notification.success({ message: result.message });
  }
}

function* setNewPasswordHandler({ payload: data }) {
  yield put(setNewPasswordRequested());
  const payload = {
    data,
    method: 'put',
    url: 'users/reset-password',
  };
  const {
    error, result,
  } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(setNewPasswordFailure(error));
  } else {
    yield put(setNewPasswordSuccess());
    notification.success({ message: result.message });
  }
}

function* verifyEmailHandler({ payload: token }) {
  yield put(verifyEmailRequested());
  const payload = {
    method: 'put',
    url: `users/verify-email/${token}`,
  };
  const { error } = yield call(httpClient, payload, false, false);

  if (error) {
    yield put(verifyEmailFailure(error));
  } else {
    yield put(verifyEmailSuccess());
  }
}

function* sendSuggestionsHandler({ payload: data }) {
  yield put(sendSuggestionsRequested());
  const payload = {
    data,
    method: 'post',
    url: 'contact-admin',
  };
  const {
    error, result,
  } = yield call(httpClient, payload, true, false);

  if (error) {
    yield put(sendSuggestionsFailure(error));
  } else {
    yield put(sendSuggestionsSuccess());
    notification.success({ message: result.message });
  }
}

function* reportUserHandler({
  payload: {
    report, user,
  },
}) {
  yield put(reportUserRequested());
  const payload = {
    data: report,
    method: 'post',
    url: `report/user/${user}`,
  };
  const { error } = yield call(httpClient, payload);

  if (error) {
    yield put(reportUserFailure(error));
  } else {
    yield put(reportUserSuccess());
  }
}

function* updateDeviceTokenHandler({ payload: token }) {
  yield put(updateDeviceTokenRequested());
  const payload = {
    data: { token },
    method: 'put',
    url: 'users/update-fcm-token',
  };
  const { error } = yield call(httpClient, payload, false);

  if (error) {
    yield put(updateDeviceTokenFailure(error));
  } else {
    yield put(updateDeviceTokenSuccess());
  }
}

function* User() {
  yield all([
    takeLatest(CHANGE_PASSWORD, changePasswordHandler),
    takeLatest(DELETE_ACCOUNT, deleteAccountHandler),
    takeLatest(LOGIN, login),
    takeLatest(FORGOT_PASSWORD, forgotPasswordHandler),
    takeLatest(RESEND_EMAIL, resendEmailHandler),
    takeLatest(LOGOUT, logoutHandler),
    takeLatest(REGISTER, registerHandler),
    takeLatest(SOCIAL_LOGIN, socialLoginHandler),
    takeLatest(UPDATE_PROFILE, updateProfileHandler),
    takeLatest(FETCH_MY_PROFILE, fetchMyProfileHandler),
    takeLatest(RESENT_VERIFICATION_MAIL, resentVerificationMailHandler),
    takeLatest(REPORT_USER, reportUserHandler),
    takeLatest(SEND_SUGGESTIONS, sendSuggestionsHandler),
    takeLatest(SET_NEW_PASSWORD, setNewPasswordHandler),
    takeLatest(UPDATE_DEVICE_TOKEN, updateDeviceTokenHandler),
    takeLatest(UPDATE_NOTIFICATION_SETTINGS, updateNotificationSettingsHandler),
    takeLatest(VERIFY_EMAIL, verifyEmailHandler),
  ]);
}

export default User;
