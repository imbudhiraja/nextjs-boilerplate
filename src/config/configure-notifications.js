import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';
import { setDeviceToken } from '../actions/user-actions-types';

const config = {};

export default function configureNotifications(store) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then((registration) => {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }

      if (firebase.messaging.isSupported()) {
        const messaging = firebase.messaging();

        messaging.useServiceWorker(registration);

        messaging
          .requestPermission()
          .then(async () => {
            const token = await messaging.getToken();

            store.dispatch(setDeviceToken(token));
            // eslint-disable-next-line no-console
            console.log('firebase token --> ', token);

            return token;
          })
          .then((token) => {
            store.dispatch(setDeviceToken(token));
            // eslint-disable-next-line no-console
            console.log('firebase token --> ', token);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('firebase init error --> ', error.code);
          });

        messaging.onTokenRefresh((token) => {
          store.dispatch(setDeviceToken(token));
        });

        messaging.onMessage(() => true);
      }
    }).catch((e) => {
      // eslint-disable-next-line no-console
      console.log('registration error--> ', e);
    });
  });
}
