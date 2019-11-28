const routes = require('next-routes');

module.exports = routes()
  .add('_error', '/_error', '/_error')
  .add('login', '/', '/login')
  .add('login', '/login', '/login')
  .add('signup', '/signup', '/signup')
  .add('account-information', '/account-information', '/account-information')
  .add('reset-password', '/reset-password', 'reset-password')
  .add('forgot-password', '/forgot-password', 'forgot-password')
  .add('change-password', '/change-password', 'change-password')
  .add('faqs', '/faqs', 'faqs')
  .add('settings', '/settings', 'settings')
  .add('personal-information', '/personal-information', 'personal-information')
  .add('help', '/help', 'help')
  .add('terms-conditions', '/terms-conditions', 'terms-conditions')
  .add('verification', '/verification', 'verification')
  .add('notifications', '/notifications', 'notifications')
  .add('messages', '/messages', 'messages')

  .add('dashboard', '/dashboard', 'dashboard');
