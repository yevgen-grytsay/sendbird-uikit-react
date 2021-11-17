import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Chat from './astro-chat/Chat';
// import * as serviceWorker from './serviceWorker';

const { sendbirdId, userName } = window.astrologer;

ReactDOM.render(
  <React.StrictMode>
    <Chat userId={sendbirdId} nickname={userName} theme="light" />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
