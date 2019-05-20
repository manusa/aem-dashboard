import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/app";

function init() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

init();

if (module.hot) {
  module.hot.accept();
}
