import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const Root = () => {
  return <App />;
};

render(<Root />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
