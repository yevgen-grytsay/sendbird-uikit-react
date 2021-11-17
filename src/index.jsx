import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './astro-chat/Chat';

const { sendbirdId, userName } = window.astrologer;

ReactDOM.render(
  <React.StrictMode>
    <Chat userId={sendbirdId} nickname={userName} theme="light" />
  </React.StrictMode>,
  document.getElementById('root'),
);
