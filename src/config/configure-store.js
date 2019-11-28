import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const isClient = typeof window !== 'undefined';

  let middleware = applyMiddleware(sagaMiddleware);

  if (isClient) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
    const isEnhancerAvailable = process.env.NODE_ENV === 'development' && typeof composeEnhancer === 'function';

    middleware = isEnhancerAvailable ? composeEnhancer(middleware) : middleware;
  }

  const store = createStore(
    rootReducer,
    initialState,
    middleware,
  );

  if (isClient) {
    store.__PERSISTOR = persistStore(store);
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
