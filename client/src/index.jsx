import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import App from './pages/app';

function init() {
  let enhancer;
  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  const store = createStore(rootReducer, {}, enhancer);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

init();

if (module.hot) {
  module.hot.accept();
}
