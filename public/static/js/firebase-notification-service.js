/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

const config = {
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const title = payload.notification.title;

  const options = {
    body: payload.notification.body,
  };

  return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;

  clickedNotification.close();
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      let matchingClient = null;

      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];

        if (windowClient.url === feClickAction) {
          matchingClient = windowClient;
          break;
        }
      }
      if (matchingClient) {
        return matchingClient.focus();
      }

      return clients.openWindow(feClickAction);
    });

  event.waitUntil(promiseChain);
});
