import cloneDeep from 'lodash/cloneDeep';
import { DELETE_ACCOUNT_SUCCESS,
  SET_DEVICE_TOKEN,
  LOGOUT_SUCCESS,
  SET_AUTHENTICATION_TOKEN,
  LOGIN_REQUESTED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUESTED,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_STATUS_CLEAR,
  SOCIAL_LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_REQUESTED,
  RESENT_VERIFICATION_MAIL_SUCCESS,
  FETCH_MY_PROFILE_SUCCESS,
  REPORT_USER_FAILURE,
  REPORT_USER_REQUESTED,
  REPORT_USER_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_NOTIFICATION_SETTINGS_SUCCESS } from '../actions/user-actions-types';

const initialState = {
  becomeOwnerStatus: 'pending',
  currentRole: 'customer',
  deviceToken: '',
  forgotPasswordStatus: '',
  loginError: null,
  registrationSuccess: '',
  reportUserStatus: 'reporting',
  token: '',
  userDetails: null,
};

export default function user(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case REGISTER_REQUESTED:
      return {
        ...state,
        registrationSuccess: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        registrationSuccess: payload,
      };

    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: payload,
      };

    case SET_DEVICE_TOKEN:
      return {
        ...state,
        deviceToken: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginError: null,
        userDetails: payload,
      };

    case LOGIN_REQUESTED:
      return {
        ...state,
        loginError: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: payload,
      };

    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPasswordStatus: 'failure',
      };

    case FORGOT_PASSWORD_REQUESTED:
      return {
        ...state,
        forgotPasswordStatus: 'requesting',
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordStatus: 'success',
      };

    case FORGOT_PASSWORD_STATUS_CLEAR:
      return {
        ...state,
        forgotPasswordStatus: ' ',
      };

    case SET_AUTHENTICATION_TOKEN:
      return {
        ...state,
        token: payload,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          ...payload,
        },
      };

    case FETCH_MY_PROFILE_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          ...payload,
        },
      };

    case RESENT_VERIFICATION_MAIL_SUCCESS:
      return {
        ...state,
        loginError: null,
      };

    case UPDATE_NOTIFICATION_SETTINGS_SUCCESS: {
      const cloneNotifications = cloneDeep(state.userDetails.notification);

      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          notification: {
            ...cloneNotifications,
            [payload.type]: {
              ...cloneNotifications[payload.type],
              [payload.channel]: !cloneNotifications[payload.type][payload.channel],
            },
          },
        },
      };
    }

    case REPORT_USER_FAILURE:
      return {
        ...state,
        reportUserStatus: 'failure',
      };

    case REPORT_USER_REQUESTED:
      return {
        ...state,
        reportUserStatus: 'reporting',
      };

    case REPORT_USER_SUCCESS:
      return {
        ...state,
        reportUserStatus: 'success',
      };

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        deviceToken: state.deviceToken,
      };

    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...initialState,
        deviceToken: state.deviceToken,
      };

    default:
      return state;
  }
}
