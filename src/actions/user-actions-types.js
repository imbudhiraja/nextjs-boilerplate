import { createAction } from 'redux-actions';

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const changePassword = createAction(CHANGE_PASSWORD);

export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';
export const changePasswordFailure = createAction(CHANGE_PASSWORD_FAILURE);

export const CHANGE_PASSWORD_REQUESTED = 'CHANGE_PASSWORD_REQUESTED';
export const changePasswordRequested = createAction(CHANGE_PASSWORD_REQUESTED);

export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const changePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS);

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const deleteAccount = createAction(DELETE_ACCOUNT);

export const DELETE_ACCOUNT_FAILURE = 'DELETE_ACCOUNT_FAILURE';
export const deleteAccountFailure = createAction(DELETE_ACCOUNT_FAILURE);

export const DELETE_ACCOUNT_REQUESTED = 'DELETE_ACCOUNT_REQUESTED';
export const deleteAccountRequested = createAction(DELETE_ACCOUNT_REQUESTED);

export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const deleteAccountSuccess = createAction(DELETE_ACCOUNT_SUCCESS);

export const FETCH_MY_PROFILE = 'FETCH_MY_PROFILE';
export const fetchMyProfile = createAction(FETCH_MY_PROFILE);

export const FETCH_MY_PROFILE_FAILURE = 'FETCH_MY_PROFILE_FAILURE';
export const fetchMyProfileFailure = createAction(FETCH_MY_PROFILE_FAILURE);

export const FETCH_MY_PROFILE_REQUESTED = 'FETCH_MY_PROFILE_REQUESTED';
export const fetchMyProfileRequested = createAction(FETCH_MY_PROFILE_REQUESTED);

export const FETCH_MY_PROFILE_SUCCESS = 'FETCH_MY_PROFILE_SUCCESS';
export const fetchMyProfileSuccess = createAction(FETCH_MY_PROFILE_SUCCESS);

export const LOGIN = 'LOGIN';
export const login = createAction(LOGIN);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE);

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const loginRequested = createAction(LOGIN_REQUESTED);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);

export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const logoutFailure = createAction(LOGOUT_FAILURE);

export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const logoutRequested = createAction(LOGOUT_REQUESTED);

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = createAction(LOGOUT_SUCCESS);

export const REGISTER = 'REGISTER';
export const register = createAction(REGISTER);

export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const registerFailure = createAction(REGISTER_FAILURE);

export const REGISTER_REQUESTED = 'REGISTER_REQUESTED';
export const registerRequested = createAction(REGISTER_REQUESTED);

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = createAction(REGISTER_SUCCESS);

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const forgotPassword = createAction(FORGOT_PASSWORD);

export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const forgotPasswordFailure = createAction(FORGOT_PASSWORD_FAILURE);

export const FORGOT_PASSWORD_REQUESTED = 'FORGOT_PASSWORD_REQUESTED';
export const forgotPasswordRequested = createAction(FORGOT_PASSWORD_REQUESTED);

export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const forgotPasswordSuccess = createAction(FORGOT_PASSWORD_SUCCESS);

export const FORGOT_PASSWORD_STATUS_CLEAR = 'FORGOT_PASSWORD_STATUS_CLEAR';
export const forgotPasswordStatusClear = createAction(
  FORGOT_PASSWORD_STATUS_CLEAR,
);

export const REPORT_USER = 'REPORT_USER';
export const reportUser = createAction(REPORT_USER);

export const REPORT_USER_FAILURE = 'REPORT_USER_FAILURE';
export const reportUserFailure = createAction(REPORT_USER_FAILURE);

export const REPORT_USER_REQUESTED = 'REPORT_USER_REQUESTED';
export const reportUserRequested = createAction(REPORT_USER_REQUESTED);

export const REPORT_USER_SUCCESS = 'REPORT_USER_SUCCESS';
export const reportUserSuccess = createAction(REPORT_USER_SUCCESS);

export const RESEND_EMAIL = 'RESEND_EMAIL';
export const resendEmail = createAction(RESEND_EMAIL);

export const RESEND_EMAIL_FAILURE = 'RESEND_EMAIL_FAILURE';
export const resendEmailFailure = createAction(RESEND_EMAIL_FAILURE);

export const RESEND_EMAIL_REQUESTED = 'RESEND_EMAIL_REQUESTED';
export const resendEmailRequested = createAction(RESEND_EMAIL_REQUESTED);

export const RESEND_EMAIL_SUCCESS = 'RESEND_EMAIL_SUCCESS';
export const resendEmailSuccess = createAction(RESEND_EMAIL_SUCCESS);

export const RESENT_VERIFICATION_MAIL = 'RESENT_VERIFICATION_MAIL';
export const resentVerificationMail = createAction(RESENT_VERIFICATION_MAIL);

export const RESENT_VERIFICATION_MAIL_FAILURE = 'RESENT_VERIFICATION_MAIL_FAILURE';
export const resentVerificationMailFailure = createAction(
  RESENT_VERIFICATION_MAIL_FAILURE,
);

export const RESENT_VERIFICATION_MAIL_REQUESTED = 'RESENT_VERIFICATION_MAIL_REQUESTED';
export const resentVerificationMailRequested = createAction(
  RESENT_VERIFICATION_MAIL_REQUESTED,
);

export const RESENT_VERIFICATION_MAIL_SUCCESS = 'RESENT_VERIFICATION_MAIL_SUCCESS';
export const resentVerificationMailSuccess = createAction(
  RESENT_VERIFICATION_MAIL_SUCCESS,
);

export const SEND_SUGGESTIONS = 'SEND_SUGGESTIONS';
export const sendSuggestions = createAction(SEND_SUGGESTIONS);

export const SEND_SUGGESTIONS_FAILURE = 'SEND_SUGGESTIONS_FAILURE';
export const sendSuggestionsFailure = createAction(SEND_SUGGESTIONS_FAILURE);

export const SEND_SUGGESTIONS_REQUESTED = 'SEND_SUGGESTIONS_REQUESTED';
export const sendSuggestionsRequested = createAction(
  SEND_SUGGESTIONS_REQUESTED,
);

export const SEND_SUGGESTIONS_SUCCESS = 'SEND_SUGGESTIONS_SUCCESS';
export const sendSuggestionsSuccess = createAction(SEND_SUGGESTIONS_SUCCESS);

export const SET_AUTHENTICATION_TOKEN = 'SET_AUTHENTICATION_TOKEN';
export const setAuthenticationToken = createAction(SET_AUTHENTICATION_TOKEN);

export const SET_DEVICE_TOKEN = 'SET_DEVICE_TOKEN';
export const setDeviceToken = createAction(SET_DEVICE_TOKEN);

export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';
export const setNewPassword = createAction(SET_NEW_PASSWORD);

export const SET_NEW_PASSWORD_FAILURE = 'SET_NEW_PASSWORD_FAILURE';
export const setNewPasswordFailure = createAction(SET_NEW_PASSWORD_FAILURE);

export const SET_NEW_PASSWORD_REQUESTED = 'SET_NEW_PASSWORD_REQUESTED';
export const setNewPasswordRequested = createAction(SET_NEW_PASSWORD_REQUESTED);

export const SET_NEW_PASSWORD_SUCCESS = 'SET_NEW_PASSWORD_SUCCESS';
export const setNewPasswordSuccess = createAction(SET_NEW_PASSWORD_SUCCESS);

export const SOCIAL_LOGIN = 'SOCIAL_LOGIN';
export const socialLogin = createAction(SOCIAL_LOGIN);

export const SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
export const socialLoginFailure = createAction(SOCIAL_LOGIN_FAILURE);

export const SOCIAL_LOGIN_REQUESTED = 'SOCIAL_LOGIN_REQUESTED';
export const socialLoginRequested = createAction(SOCIAL_LOGIN_REQUESTED);

export const SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
export const socialLoginSuccess = createAction(SOCIAL_LOGIN_SUCCESS);

export const UPDATE_DEVICE_TOKEN = 'UPDATE_DEVICE_TOKEN';
export const updateDeviceToken = createAction(UPDATE_DEVICE_TOKEN);

export const UPDATE_DEVICE_TOKEN_FAILURE = 'UPDATE_DEVICE_TOKEN_FAILURE';
export const updateDeviceTokenFailure = createAction(
  UPDATE_DEVICE_TOKEN_FAILURE,
);

export const UPDATE_DEVICE_TOKEN_REQUESTED = 'UPDATE_DEVICE_TOKEN_REQUESTED';
export const updateDeviceTokenRequested = createAction(
  UPDATE_DEVICE_TOKEN_REQUESTED,
);

export const UPDATE_DEVICE_TOKEN_SUCCESS = 'UPDATE_DEVICE_TOKEN_SUCCESS';
export const updateDeviceTokenSuccess = createAction(
  UPDATE_DEVICE_TOKEN_SUCCESS,
);

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfile = createAction(UPDATE_PROFILE);

export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const updateProfileFailure = createAction(UPDATE_PROFILE_FAILURE);

export const UPDATE_PROFILE_REQUESTED = 'UPDATE_PROFILE_REQUESTED';
export const updateProfileRequested = createAction(UPDATE_PROFILE_REQUESTED);

export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const updateProfileSuccess = createAction(UPDATE_PROFILE_SUCCESS);

export const UPDATE_NOTIFICATION_SETTINGS = 'UPDATE_NOTIFICATION_SETTINGS';
export const updateNotificationSettings = createAction(
  UPDATE_NOTIFICATION_SETTINGS,
);

export const UPDATE_NOTIFICATION_SETTINGS_FAILURE = 'UPDATE_NOTIFICATION_SETTINGS_FAILURE';
export const updateNotificationSettingsFailure = createAction(
  UPDATE_NOTIFICATION_SETTINGS_FAILURE,
);

export const UPDATE_NOTIFICATION_SETTINGS_REQUESTED = 'UPDATE_NOTIFICATION_SETTINGS_REQUESTED';
export const updateNotificationSettingsRequested = createAction(
  UPDATE_NOTIFICATION_SETTINGS_REQUESTED,
);

export const UPDATE_NOTIFICATION_SETTINGS_SUCCESS = 'UPDATE_NOTIFICATION_SETTINGS_SUCCESS';
export const updateNotificationSettingsSuccess = createAction(
  UPDATE_NOTIFICATION_SETTINGS_SUCCESS,
);

export const VERIFY_EMAIL = 'VERIFY_EMAIL';
export const verifyEmail = createAction(VERIFY_EMAIL);

export const VERIFY_EMAIL_FAILURE = 'VERIFY_EMAIL_FAILURE';
export const verifyEmailFailure = createAction(VERIFY_EMAIL_FAILURE);

export const VERIFY_EMAIL_REQUESTED = 'VERIFY_EMAIL_REQUESTED';
export const verifyEmailRequested = createAction(VERIFY_EMAIL_REQUESTED);

export const VERIFY_EMAIL_SUCCESS = 'VERIFY_EMAIL_SUCCESS';
export const verifyEmailSuccess = createAction(VERIFY_EMAIL_SUCCESS);

export const REFERRAL_DETAIL = 'REFERRAL_DETAIL';
export const referralDetail = createAction(REFERRAL_DETAIL);
