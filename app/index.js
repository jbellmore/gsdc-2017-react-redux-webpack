import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App.jsx';

import store from './store';

// This function wraps the initialization since it must be initialized
// differently if hot module replacement should be enabled
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Enable HMR at root level using Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App)
  });
}