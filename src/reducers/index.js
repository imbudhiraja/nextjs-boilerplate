import { persistCombineReducers } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'js-cookie';
import app from './app';
import threads from './threads';
import user from './user';
import encryptor from './encryptor';

const options = { expiration: { default: 90 * 86400 } };

const config = {
  blacklist: [
    'app',
    'network',
    'notifications',
    'toast',
  ],
  key: 'primary',
  storage: new CookieStorage(Cookies, options),
  transforms: [encryptor],
};

const reducers = persistCombineReducers(config, {
  app,
  threads,
  user,
});

export default reducers;
