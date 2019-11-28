import { HIDE_LOADER, SHOW_LOADER } from '../actions/app-actions-types';
import { LOGOUT_SUCCESS } from '../actions/user-actions-types';

const initialState = {
  type: 'loader',
  visible: false,
};

export default function app(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case HIDE_LOADER:
      return {
        type: payload || 'loader',
        visible: false,
      };

    case SHOW_LOADER:
      return {
        type: payload || 'loader',
        visible: true,
      };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
}
