import * as Sentry from '@sentry/browser';

const configureSentry = () => {
  if (['production', 'staging'].includes(process.env.NODE_ENV)) {
    Sentry.init({ dsn: process.env.SENTRY_API_KEY });
  }
};

export default configureSentry;
