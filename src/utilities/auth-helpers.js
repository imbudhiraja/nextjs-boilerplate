import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import Router from 'next/router';

export const auth = (ctx, layout = 'private') => {
  if (ctx && ctx.req && !ctx.req.headers) {
    return null;
  }

  const { isLoggedIn } = nextCookie(ctx);

  if (ctx.isServer && !isLoggedIn && layout === 'public') {
    return null;
  }

  if (!ctx.isServer && !isLoggedIn && layout === 'private') {
    Router.push('/');

    return null;
  }

  if (ctx.isServer && !isLoggedIn && layout === 'private') {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();

    return null;
  }

  if (ctx.isServer && isLoggedIn && layout === 'public') {
    ctx.res.writeHead(302, { Location: '/dashboard' });
    ctx.res.end();

    return null;
  }

  if (!ctx.isServer && isLoggedIn && layout === 'public') {
    Router.push('/dashboard');
  }

  return isLoggedIn;
};

export const setCookies = (status) => {
  if (status) {
    cookie.set('isLoggedIn', status);
  } else {
    cookie.remove('isLoggedIn');

    Object.keys(cookie.get()).forEach((cookieName) => {
      cookie.remove(cookieName);
    });
  }
};
