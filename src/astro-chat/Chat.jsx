import React, { useState } from 'react';

import './Chat.css';

import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import SendBirdProvider from '../lib/Sendbird';
import ChannelList from '../smart-components/ChannelList';
import Channel from '../smart-components/Conversation';
import ChannelSettings from '../smart-components/ChannelSettings';
import {LOG_LEVELS} from "../lib/Logger";
// import App from "../smart-components/App";
// import {
//   SendBirdProvider,
//   ChannelList,
//   Channel,
//   ChannelSettings,
// } from '../main';
// import './dist/index.css';

const APP_ID = process.env.REACT_APP_SENDBIRD_APP_ID;
const LOG_LEVEL = process.env.NODE_ENV === 'production' ? LOG_LEVELS.ERROR : LOG_LEVELS.ALL;

export default function Chat({ userId, nickname, theme }) {
  // const history = useHistory();
  // useEffect(() => {
  //   if (!userId || !nickname) {
  //     history.push('/');
  //   }
  // }, [userId, nickname, history]);
  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);
  return (
    <div style={{ height: '100vh' }}>
      <SendBirdProvider
        appId={APP_ID}
        theme={theme}
        userId={userId}
        nickname={nickname}
        config={{logLevel: LOG_LEVEL}}
      >
        <div className="sendbird-app__wrap">
          <div className="sendbird-app__channellist-wrap">
            <ChannelList
              onChannelSelect={(channel) => {
                if (channel && channel.url) {
                  setCurrentChannelUrl(channel.url);
                }
              }}
            />
          </div>
          <div className="sendbird-app__conversation-wrap">
            <Channel
              channelUrl={currentChannelUrl}
              onChatHeaderActionClick={() => { setShowSettings(true); }}
            />
          </div>
        </div>
        {showSettings && (
          <div className="sendbird-app__settingspanel-wrap">
            <ChannelSettings
              channelUrl={currentChannelUrl}
              onCloseClick={() => { setShowSettings(false); }}
            />
          </div>
        )}
      </SendBirdProvider>
    </div>
  );
}

Chat.propTypes = {
  userId: PropTypes.string.isRequired,
  theme: PropTypes.string,
  nickname: PropTypes.string.isRequired,
};

Chat.defaultProps = {
  theme: 'light',
};
