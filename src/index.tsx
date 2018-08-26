import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

export function renderApp() {
  return <App/>;
}

ReactDOM.render(
  renderApp(),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
